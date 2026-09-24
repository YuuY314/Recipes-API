"use client"

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./recipe.module.css";
import { Economica } from "next/font/google";

export default function Recipe(){
    const params = useParams();
    const [ recipe, setRecipe ] = useState();
    const [ msgErro, setMsgErro ] = useState("");

    useEffect(() => {
        fetch(`https://dummyjson.com/recipes/${params.id}`)
        .then(res => res.json())
            .then(data => {
                setRecipe(data);
                setMsgErro("");
            })
        .catch(erro => setMsgErro(erro.message));
    }, []);

    return (
        <main className={styles.main}>
            { recipe && 
                <section className={styles.recipe_info}>
                    <img src={recipe.image} alt="" />
                    <div>
                        <h1>{recipe.name}</h1>
                        <div className={styles.recipe_rating}>
                            <div className={styles.recipe_rating_stars}>
                                {Array.from({ length: 5 }).map((_, idx) => {
                                    const rating = recipe.rating;
                                    const fullStars = Math.floor(rating);
                                    const hasHalfStar = rating - fullStars >= 0.5;

                                    return (
                                        <img
                                            key={idx}
                                            src={idx < fullStars ? "/star-solid.png" : idx === fullStars && hasHalfStar ? "/star-half-solid.png" : "/star-regular.png"}
                                            alt="star"
                                        />
                                    );
                                })
                                }
                                <p>({recipe.rating})</p>
                            </div>
                            <p>{recipe.reviewCount} reviews</p>
                        </div>
                        <h2>Ingredients</h2>
                        <ul>
                            {recipe.ingredients.map((i, idx) => (
                                <li key={idx}>{i}</li>
                            ))}
                        </ul>
                        <h2>Instructions</h2>
                        <ul>
                            {recipe.instructions.map((i, idx) => (
                                <li key={idx}>{i}</li>
                            ))}
                        </ul>
                        <div>
                            <h2>Preparation Time</h2>
                            <p>{recipe.prepTimeMinutes} minutes</p>
                        </div>
                        <div>
                            <h2>Cooking Time</h2>
                            <p>{recipe.cookTimeMinutes} minutes</p>
                        </div>
                        <div>
                            <h2>Servings</h2>
                            <p>{recipe.servings} people</p>
                        </div>
                        <div>
                            <h2>Difficulty</h2>
                            <p>{recipe.difficulty}</p>
                        </div>
                        <div>
                            <h2>Cuisine</h2>
                            <p>{recipe.cuisine}</p>
                        </div>
                        <div>
                            <h2>Calories per Serving</h2>
                            <p>{recipe.caloriesPerServing} calories</p>
                        </div>
                        <div>
                            <h2>Cuisine</h2>
                            <p>{recipe.cuisine}</p>
                        </div>
                    </div>
                </section>
            }
        </main>
    );
}