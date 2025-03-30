import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../components/Card";
import useFetch from "../hooks/useFetch";

export const MovieList = ({ title, apiPath }) => {
    const { data: movies } = useFetch(apiPath)

    useEffect(() => {
        document.title = title;
    });

    const navigetor = useNavigate();

    return (
        <div>
            <main className="container">
                {title == "Your Guide to Great Movies" ? (
                    <div className="bg bg-body-tertiary p-5 mb-5 border">
                        <h3 className="text-primary">Welcome to Movie Buddy</h3>
                        <p className="lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium blanditiis porro atque, sint officiis aut.</p>
                        <button className="btn btn-primary" onClick={() => { navigetor('/movies/upcoming') }}>Explore Now</button>
                    </div>
                ) : ""}
                <h5 className="text-danger py-2 border-bottom">{title}</h5>

                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 py-2">
                    {movies.map((movie) => {
                        return <Card key = {movie.id} movie = {movie} />;
                    })}
                </div>
            </main>
        </div>
    )
}

