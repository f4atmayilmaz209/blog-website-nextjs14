"use client"
import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from "../../authContext"

const AboutPage = () => {
    const {isAuthUser}=useContext(GlobalContext)

  return (
    <div>
    <br/>
    <h1>
        What is <span>About?</span>
    </h1>
    <br/>
    <div>
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat quos deleniti ut similique ratione ipsam eius aliquam alias unde placeat aliquid a, maxime odio consectetur officiis, maiores in, aspernatur minima!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ex maxime asperiores itaque non sit quidem eius dolorum, odio cupiditate officiis voluptatum esse ipsum nisi quia, odit veniam quas! Officiis?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic atque sed praesentium quisquam accusamus architecto repudiandae, dicta, vitae rerum amet neque porro culpa quo? Libero possimus corrupti necessitatibus corporis tenetur.
            <br/>
            <br/>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit sed impedit libero perferendis, odit distinctio a aliquid nemo accusamus minus nihil eveniet beatae minima saepe optio incidunt fugiat aut asperiores?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente eligendi, voluptates sunt assumenda, ex mollitia eius, odio voluptatem doloribus nihil impedit! Ipsum ex et, debitis illo nesciunt deserunt. Facilis, laboriosam.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero laboriosam deleniti quisquam. Quis, deserunt laudantium. Facere, voluptatum obcaecati optio quis quos quod aliquid ratione dolor accusamus ad, ducimus consequatur enim.
            <br/>
            <br/>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit corporis quam deleniti velit quaerat quis ipsam ad deserunt vel, exercitationem ullam quisquam nisi cumque tempore id corrupti distinctio doloremque commodi.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ullam non quae, recusandae saepe iusto dignissimos ipsum voluptatibus nihil nemo odio reiciendis vitae maxime sint vero autem maiores magni corrupti.

        </p>
        <br/>
        <span>
            FatmaYılmaz

        </span>
        <h5>
            Founder and CEO of Fatma

        </h5>
        <br/>
        <br/>
        <br/>




    </div>
</div>
  )
}

export default AboutPage
