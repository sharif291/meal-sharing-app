import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

export async function shareMeal(formData) {
    'use server';
    const meal = {
        title: formData.get('title'),
        creator: formData.get('name'),
        creator_email: formData.get('email'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        // image: formData.get('image'),
    }
    console.log("file submited", meal)
    const savedMeal = await saveMeal(meal)
    redirect(`/meals/${savedMeal.slug}`)
}