"use client"

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./recipe.module.css";

export default function Recipe(){
    const params = useParams();
    const [ recipe, setRecipe ] = useState();

    useEffect(() => {
        fetch("https://dummyjson.com/recipes")
        .then(res => res.json())
            .then(data => {
                const recipeFound = data.recipes.find(r => r.id === Number(params.id));
                setRecipe(recipeFound);
                setMsgErro("");
            })
        .catch(erro => setMsgErro(erro.message));
    }, [params.id]);

    return (
        <main className={styles.main}>
            { recipe && 
                <section className={styles.recipe_info}>
                    <img src={recipe.image} alt="" />
                    <div>
                        <h1>{recipe.name}</h1>
                        <h2>Ingredients</h2>
                        <ul>
                            {recipe.ingredients.map(i => (
                                <li>{i}</li>
                            ))}
                        </ul>
                        <h2>Instructions</h2>
                        <ul>
                            {recipe.instructions.map(i => (
                                <li>{i}</li>
                            ))}
                        </ul>
                        <h2>Preparation Time</h2>
                        <p>{recipe.prepTimeMinutes} minutes</p>
                        <h2>Cooking Time</h2>
                        <p>{recipe.cookTimeMinutes} minutes</p>
                    </div>
                </section>
            }
        </main>
    );
}