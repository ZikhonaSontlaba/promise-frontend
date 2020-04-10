import React from 'react'
import Logo from '../assets/Logo.jpg'
import '../styles/bulma.css';
import '../styles/main.css';
import '../styles/admin.css';

export default function index() {
    return (
        <section class="hero is-fullheight is-default is-bold">
        <div class="hero-head">
            <nav class="navbar">
                <div class="container">
                    <div class="navbar-brand">
                        <a class="navbar-item" href="/">
                            <img src={Logo} alt="Logo" />
                        </a>
                        <span class="navbar-burger burger" data-target="navbarMenu">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </div>
                    <div id="navbarMenu" class="navbar-menu">
                        <div class="navbar-end">
                            <div class="tabs is-right">
                                <ul>
                                    <li class="is-active"><a href="/">Home</a></li>
                                    <li><a href="/forum">Forum</a></li>
                                    <li><a href="/contact">Contact</a></li>
                                    <li><a href="#">Memebers</a></li>
                                    <li><a href="#">Sponsors</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="columns is-vcentered">
                    <div class="column is-5">
                        <figure class="image is-4by3">
                            <img src={Logo} alt="Promise Logo" />
                        </figure>
                    </div>
                    <div class="column is-6 is-offset-1">
                        <h1 class="title is-2">
                            Promise
                        </h1>
                        <h2 class="subtitle is-4">
                            Promise at Wits.
                        </h2>
                        <br />
                        <p class="has-text-centered">
                            <a href="/register" class="button is-medium is-info is-outlined">
                                Learn more
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="hero-foot">
            <div class="container">
                <div class="tabs is-centered">
                    <p class="has-text-centered">Promise &copy; 2020</p>
                </div>
            </div>
        </div>
    </section>
    )
}
