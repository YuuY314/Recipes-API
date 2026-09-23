"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import RecipeCard from "../components/RecipeCard";

export default function Home() {
  const [ listaReceitas, setListaReceitas ] = useState([]);
  const [ msgErro, setMsgErro ] = useState(""); 

  useEffect(() => {
      fetch("https://dummyjson.com/recipes")
      .then(res => res.json())
          .then(data => {
              console.log(data)
              setListaReceitas(data.recipes);
              setMsgErro("");
          })
      .catch(erro => setMsgErro(erro.message));
  }, []);

  return (
    <main className={styles.main}>
      {msgErro != "" && <p>Erro: {msgErro}</p>}

      {listaReceitas.length > 0 ? 
          <section className={styles.container}>
              {listaReceitas.map((receita) => (
                <RecipeCard key={receita.id} recipes={receita}/>
              ))}
          </section>
      :
          <div>
              <h2>No recipes found. Try again later...</h2>
          </div>
      }
    </main>
  );
}
