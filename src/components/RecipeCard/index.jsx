import styles from "./recipeCard.module.css";
import Link from "next/link";

export default function RecipeCard({recipes}){
    return (
        <div className={styles.recipes_card}>
            <img src={recipes.image} alt=""/>
            <h2>{recipes.name}</h2>
            <Link href={`/recipes/${recipes.id}`}><h3>Learn more</h3></Link>
        </div>
    )
}