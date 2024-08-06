import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';
import fs from "node:fs"
const db = sql('meals.db')

export async function getMeals() {
    // throw new Error ("error")
    // await new Promise((resolve) => setTimeout(resolve, 5000));
    return db.prepare('SELECT * FROM meals').all();
}
export function getMeal(slug) {
    return db.prepare('SELECT * from meals where slug=?').get(slug)
}

export async function saveMeal(meal) {
    meal.slug = slugify(meal.title, { lower: true })
    meal.instructions = xss(meal.instructions);

    // const extension = meal.image.name.split('.').pop()
    // const fileName = `${meal.slug}.${extension}`

    // const stream = fs.createWriteStream(`public/images/${fileName}`)
    // const bufferedImage = await meal.image.arrayBuffer()

    // stream.write(Buffer.from(bufferedImage), (err) => {
    //     if (err) {
    //         throw new Error("Image upload failed")
    //     }
    // })

    meal.image = `/images/${"burger.jpg"}`

    db.prepare(`
    INSERT INTO meals (
            slug,
            title,
            image,
            summary,
            instructions,
            creator,
            creator_email)
        VALUES (
            @slug,
            @title,
            @image,
            @summary,
            @instructions,
            @creator,
            @creator_email
        )
    `).run(meal)
    return meal
}