"use client";
import React from "react";
import "./about.css";

export default function About() {
    return (
        <>
            <div className="about-head">
                <h1>About Us</h1>
            </div>
            <div className="aboutus">

                <div className="about-video-cont">
                    <video autoPlay loop muted id="about-video">
                        <source src='/about.mp4' type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className="about-text-cont">
                    <p>
                        We are dedicated to bridging the gap in energy access, ensuring that reliable and sustainable electricity reaches even the most remote areas. Our mission is to empower communities with the essential resources they need to thrive by leveraging innovative technologies and sustainable energy solutions.

                        <br></br>
                        <br></br>

                        We recognize that access to electricity is not just about power—it’s about opportunity, growth, and progress. With a focus on decentralized, clean energy solutions and community engagement, we aim to transform lives by providing access to reliable energy, fostering economic growth, and supporting a greener future for all.
                    </p>
                </div>
            </div>
        </>
    );
}
