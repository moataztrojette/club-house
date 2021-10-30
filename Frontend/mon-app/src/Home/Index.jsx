import React from "react";
import { NavLink } from "react-router-dom";
const Index = () => {
    return (  <div>
        <div className="header_index">
          <div className="app_index">
            <header>
              <nav className="navbar_index">
                <div>
                  <ul className="logo">
                    <li>
                      <svg className="svg_index" viewBox="0 0 640 118">
                        <path d="M595.06 72.04c-3.07 1.38-4.3.46-4.3-4.92 0-11.22 3.69-16.6 9.37-16.6 6.45 0 10.3 7.53 10.3 12.75 0 1.08-.61 1.84-2 2.46l-13.37 6.31zM212.59 70.5c0-7.53 1.23-18.9 9.68-18.9 10.76 0 13.52 21.97 13.52 30.43s-1.38 18.75-9.83 18.75c-10.6-.01-13.37-21.98-13.37-30.28zm153.97-1.84c0-6.15 1.23-19.36 9.68-19.36 10.76 0 13.52 22.43 13.52 31.04 0 6.15-1.38 19.21-9.83 19.21-10.6-.01-13.37-22.44-13.37-30.89zM40.64 33.93C19.28 33.93 1 50.99 1 76.65c0 22.9 15.67 38.72 36.57 38.72s35.5-15.67 35.5-24.12c0-2.77-1.54-5.53-4.61-5.53-1.69 0-3.38.92-6.15 3.07-4.46 3.38-9.07 5.38-14.29 5.38-13.83 0-22.13-13.98-22.13-28.12 0-13.06 3.69-19.21 9.53-19.21 5.22 0 8.76 4.92 12.75 18.13 1.38 4.61 2.92 6.45 5.38 6.45 5.22 0 17.98-10.14 17.98-17.21 0-3.84-3.07-7.99-7.53-11.83-5.38-4.61-13.06-8.45-23.36-8.45zm335.14 81.44c24.74 0 41.34-17.21 41.34-42.41 0-23.82-14.14-39.18-36.11-39.18-25.05 0-41.64 17.21-41.64 42.56-.01 23.82 13.97 39.03 36.41 39.03zm118.47-18.9c-3.69 0-4.76-4-4.76-7.53V42.69c0-6.45-2.46-8.76-5.99-8.76-2 0-4.3.61-6.76 1.69l-13.06 5.69c-5.38 2.3-6.91 4.46-6.91 7.38 0 1.84 1.08 3.69 4 5.38 2.3 1.54 3.23 3.23 3.23 9.83v18.29c0 8.3-5.99 10.14-9.83 10.14-5.38 0-7.84-3.23-7.84-11.22l.31-38.42c0-6.45-2.46-8.76-5.99-8.76-2 0-4.3.61-6.76 1.69l-12.6 5.53c-5.38 2.3-6.91 4.46-6.91 7.38 0 1.84 1.08 3.69 4 5.38 2.3 1.54 3.23 3.23 3.23 9.83 0 11.37-.92 22.59-.92 31.96 0 11.52 7.38 19.67 18.29 19.67 7.22 0 13.83-3.69 21.82-9.37 1.08-.77 2.15-1.23 3.07-1.23 1.38 0 2.15 1.08 2.92 4.92.77 4 2.46 5.69 5.38 5.69 1.84 0 4.3-.61 6.61-1.69l13.37-6.15c3.23-1.54 4.92-2 6.45-2 2 0 2.92.92 3.38 2.92l.46 2.15c.92 4.46 3.23 5.99 5.99 5.99 4.15 0 6.91-5.07 9.53-5.07 1.84 0 3.23 1.08 7.38 2.15 3.84 1.08 8.3 1.69 12.6 1.69 15.37 0 26.58-7.68 29.2-18.13.46-1.84.92-2.3 1.54-2.3.61 0 1.08.15 2 2 5.53 10.91 17.06 18.44 31.35 18.44 22.9 0 37.03-15.52 37.03-25.2 0-2.92-1.69-5.22-4.46-5.22-1.54 0-2.92.61-5.84 3.07-5.38 4.3-11.52 6.76-17.67 6.76-10.76 0-15.83-7.38-15.83-9.99 0-1.38.61-2.15 1.54-2.61l35.96-15.67c2.15-.92 4.15-2.3 4.15-5.53 0-2.61-1.08-5.07-3.53-9.83-5.84-11.22-16.13-17.21-28.43-17.21-20.9 0-37.03 18.13-38.88 37.49-.31 3.23-.92 3.84-1.69 3.84s-1.23-.46-2.15-1.38c-5.22-4.76-10.91-8.14-22.28-11.99-14.6-4.92-17.52-7.53-17.52-10.3 0-2.77 3.38-4.61 8.14-4.61 5.69 0 11.68 2.46 16.29 6.76 6.15 5.69 8.61 7.53 11.37 7.53s4.61-2.3 4.61-4.92c0-1.38-.31-2.92-.92-4.3l-5.38-13.52c-1.54-4-3.53-6.15-6.45-6.15-2 0-3.38.77-4.76 1.54-1.23.77-1.84 1.23-3.23 1.23-4.15 0-6.91-1.23-13.83-1.23-18.29 0-30.89 8.76-30.89 22.13 0 9.99 7.22 17.67 24.59 23.82 17.36 6.15 19.21 8.91 19.21 11.83 0 3.07-2.77 5.53-8.45 5.53-8.91 0-16.75-3.69-22.28-12.29-3.07-4.76-5.07-6.91-8.14-6.91-2.92 0-4.92 2.46-4.92 6.3 0 2.46.92 5.07.92 7.53-.06 3.05-1.44 4.59-4.06 4.59zM108.56 53.91c2.3 1.54 3.23 3.23 3.23 9.83 0 11.37-.92 22.59-.92 31.96 0 11.52 7.38 19.67 18.29 19.67 7.22 0 13.83-3.69 21.82-9.37 1.08-.77 2.15-1.23 3.07-1.23 1.38 0 2.15 1.08 2.92 4.92.77 4 2.46 5.69 5.38 5.69 1.84 0 4.3-.61 6.61-1.69l9.53-4.46c3.23-1.54 5.38-2 6.76-2 2.15 0 2.92 1.38 2.92 3.53 0 3.23 1.69 4.61 3.84 4.61 1.23 0 2.61-.46 4.76-1.84l5.69-3.53c1.84-1.23 2.92-1.69 4-1.69s2 .31 3.07 1.23c5.07 4.15 10.45 5.84 16.9 5.84 20.28 0 35.03-18.59 35.03-43.49 0-22.13-10.3-37.95-27.2-37.95-5.22 0-10.6 1.54-15.06 4.76-1.84 1.38-2.77 2-3.69 2-1.23 0-1.84-.92-1.84-2.61V8.27c0-4.76-2-7.22-5.53-7.22-1.54 0-3.69.46-6.91 2.46l-16.29 10.14c-3.69 2.3-4.46 4.3-4.46 5.84 0 2.15 1.38 4 4.46 5.84 2.3 1.54 3.23 2.92 3.23 10.91v53.63c0 5.53-1.38 6.76-3.69 6.76-3.69 0-4.76-4-4.76-7.53V42.69c0-6.45-2.46-8.76-5.99-8.76-2 0-4.3.61-6.76 1.69l-13.06 5.69c-5.38 2.3-6.91 4.46-6.91 7.38 0 1.84 1.08 3.69 4 5.38 2.3 1.54 3.23 3.23 3.23 9.83v18.29c0 8.3-5.99 10.14-9.83 10.14-5.38 0-7.84-3.23-7.84-11.22l.31-38.42c0-6.45-2.46-8.76-5.99-8.76-2 0-4.3.61-6.76 1.69l-12.6 5.53c-5.38 2.3-6.91 4.46-6.91 7.38-.04 1.84 1.03 3.69 3.95 5.38zm155.81 39.18c0 5.99-.46 7.53-3.38 9.37-3.38 2.15-4.61 3.69-4.61 5.99 0 3.53 3.07 5.38 8.76 5.38h23.97c5.69 0 8.76-1.84 8.76-5.38 0-2.3-1.23-3.84-4.61-5.99-2.92-1.84-3.38-3.38-3.38-9.37V67.43c0-8.76 2.77-11.99 7.07-11.99 5.99 0 8.61 6.15 11.06 19.05 1.84 9.99 2.61 20.59 2.61 22.74 0 3.07-.15 4.15-2 5.22-3.38 2-4.61 3.69-4.61 5.99 0 3.69 2.46 5.38 7.99 5.38h24.28c5.53 0 8.14-1.69 8.14-5.38 0-2.3-1.38-4.15-4-5.99-2-1.38-2.3-2.3-4.61-19.21-1.54-11.83-2.92-21.21-6.45-32.73-3.53-11.52-9.37-16.6-18.29-16.6-7.07 0-11.83 3.07-16.6 6.15-1.08.77-2 1.08-2.77 1.08-.92 0-1.84-.46-1.84-2.61V8.27c0-4.76-2-7.22-5.53-7.22-1.54 0-3.69.46-6.91 2.46l-16.29 10.14c-3.69 2.3-4.46 4.3-4.46 5.84 0 2.15 1.38 4 4.46 5.84 2.3 1.54 3.23 2.92 3.23 10.91v56.85zm-187.77 0c0 5.99-.46 7.53-3.38 9.37-3.38 2.15-4.61 3.69-4.61 5.99 0 3.53 3.07 5.38 8.76 5.38h23.97c5.69 0 8.76-1.84 8.76-5.38 0-2.3-1.23-3.84-4.61-5.99-2.92-1.84-3.38-3.38-3.38-9.37V8.27c0-4.76-2-7.22-5.53-7.22-1.54 0-3.69.46-6.91 2.46l-16.3 10.14c-3.69 2.3-4.46 4.3-4.46 5.84 0 2.15 1.38 4 4.46 5.84 2.3 1.54 3.23 2.92 3.23 10.91v56.85z" />
                      </svg>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="btn-connect">
                  </ul>
                </div>
              </nav>
              <div className="img-navbar">
                <img src="/img/index/img1.png" alt="" />
              </div>
              <div className="title-navbar">
                <NavLink to="/singup"><input type="submit" className="btn-index" value="Get Club House" /></NavLink>
              </div>
            </header>
          </div>
        </div>
        <div className="section_index">
          <div className="container_index">
            <h2>
              The magic of Clubhouse is witnessing the most
            </h2>
            <img src="/img/index/img2.png" className="containter-img1" alt="" />
            <br />
            <img src="/img/index/img3.png" className="containter-img2" alt="" />
            <br />
            <h1>Of People</h1>
          </div>
        </div>
        <div className="footer_index">
          <div className="container-footer">
            <div className="containt-footer">
              <div className="footer-left">
                <img src="/img/index/img4.png" alt="" />
                <svg className="svg_index" viewBox="0 0 640 118">
                  <path d="M595.06 72.04c-3.07 1.38-4.3.46-4.3-4.92 0-11.22 3.69-16.6 9.37-16.6 6.45 0 10.3 7.53 10.3 12.75 0 1.08-.61 1.84-2 2.46l-13.37 6.31zM212.59 70.5c0-7.53 1.23-18.9 9.68-18.9 10.76 0 13.52 21.97 13.52 30.43s-1.38 18.75-9.83 18.75c-10.6-.01-13.37-21.98-13.37-30.28zm153.97-1.84c0-6.15 1.23-19.36 9.68-19.36 10.76 0 13.52 22.43 13.52 31.04 0 6.15-1.38 19.21-9.83 19.21-10.6-.01-13.37-22.44-13.37-30.89zM40.64 33.93C19.28 33.93 1 50.99 1 76.65c0 22.9 15.67 38.72 36.57 38.72s35.5-15.67 35.5-24.12c0-2.77-1.54-5.53-4.61-5.53-1.69 0-3.38.92-6.15 3.07-4.46 3.38-9.07 5.38-14.29 5.38-13.83 0-22.13-13.98-22.13-28.12 0-13.06 3.69-19.21 9.53-19.21 5.22 0 8.76 4.92 12.75 18.13 1.38 4.61 2.92 6.45 5.38 6.45 5.22 0 17.98-10.14 17.98-17.21 0-3.84-3.07-7.99-7.53-11.83-5.38-4.61-13.06-8.45-23.36-8.45zm335.14 81.44c24.74 0 41.34-17.21 41.34-42.41 0-23.82-14.14-39.18-36.11-39.18-25.05 0-41.64 17.21-41.64 42.56-.01 23.82 13.97 39.03 36.41 39.03zm118.47-18.9c-3.69 0-4.76-4-4.76-7.53V42.69c0-6.45-2.46-8.76-5.99-8.76-2 0-4.3.61-6.76 1.69l-13.06 5.69c-5.38 2.3-6.91 4.46-6.91 7.38 0 1.84 1.08 3.69 4 5.38 2.3 1.54 3.23 3.23 3.23 9.83v18.29c0 8.3-5.99 10.14-9.83 10.14-5.38 0-7.84-3.23-7.84-11.22l.31-38.42c0-6.45-2.46-8.76-5.99-8.76-2 0-4.3.61-6.76 1.69l-12.6 5.53c-5.38 2.3-6.91 4.46-6.91 7.38 0 1.84 1.08 3.69 4 5.38 2.3 1.54 3.23 3.23 3.23 9.83 0 11.37-.92 22.59-.92 31.96 0 11.52 7.38 19.67 18.29 19.67 7.22 0 13.83-3.69 21.82-9.37 1.08-.77 2.15-1.23 3.07-1.23 1.38 0 2.15 1.08 2.92 4.92.77 4 2.46 5.69 5.38 5.69 1.84 0 4.3-.61 6.61-1.69l13.37-6.15c3.23-1.54 4.92-2 6.45-2 2 0 2.92.92 3.38 2.92l.46 2.15c.92 4.46 3.23 5.99 5.99 5.99 4.15 0 6.91-5.07 9.53-5.07 1.84 0 3.23 1.08 7.38 2.15 3.84 1.08 8.3 1.69 12.6 1.69 15.37 0 26.58-7.68 29.2-18.13.46-1.84.92-2.3 1.54-2.3.61 0 1.08.15 2 2 5.53 10.91 17.06 18.44 31.35 18.44 22.9 0 37.03-15.52 37.03-25.2 0-2.92-1.69-5.22-4.46-5.22-1.54 0-2.92.61-5.84 3.07-5.38 4.3-11.52 6.76-17.67 6.76-10.76 0-15.83-7.38-15.83-9.99 0-1.38.61-2.15 1.54-2.61l35.96-15.67c2.15-.92 4.15-2.3 4.15-5.53 0-2.61-1.08-5.07-3.53-9.83-5.84-11.22-16.13-17.21-28.43-17.21-20.9 0-37.03 18.13-38.88 37.49-.31 3.23-.92 3.84-1.69 3.84s-1.23-.46-2.15-1.38c-5.22-4.76-10.91-8.14-22.28-11.99-14.6-4.92-17.52-7.53-17.52-10.3 0-2.77 3.38-4.61 8.14-4.61 5.69 0 11.68 2.46 16.29 6.76 6.15 5.69 8.61 7.53 11.37 7.53s4.61-2.3 4.61-4.92c0-1.38-.31-2.92-.92-4.3l-5.38-13.52c-1.54-4-3.53-6.15-6.45-6.15-2 0-3.38.77-4.76 1.54-1.23.77-1.84 1.23-3.23 1.23-4.15 0-6.91-1.23-13.83-1.23-18.29 0-30.89 8.76-30.89 22.13 0 9.99 7.22 17.67 24.59 23.82 17.36 6.15 19.21 8.91 19.21 11.83 0 3.07-2.77 5.53-8.45 5.53-8.91 0-16.75-3.69-22.28-12.29-3.07-4.76-5.07-6.91-8.14-6.91-2.92 0-4.92 2.46-4.92 6.3 0 2.46.92 5.07.92 7.53-.06 3.05-1.44 4.59-4.06 4.59zM108.56 53.91c2.3 1.54 3.23 3.23 3.23 9.83 0 11.37-.92 22.59-.92 31.96 0 11.52 7.38 19.67 18.29 19.67 7.22 0 13.83-3.69 21.82-9.37 1.08-.77 2.15-1.23 3.07-1.23 1.38 0 2.15 1.08 2.92 4.92.77 4 2.46 5.69 5.38 5.69 1.84 0 4.3-.61 6.61-1.69l9.53-4.46c3.23-1.54 5.38-2 6.76-2 2.15 0 2.92 1.38 2.92 3.53 0 3.23 1.69 4.61 3.84 4.61 1.23 0 2.61-.46 4.76-1.84l5.69-3.53c1.84-1.23 2.92-1.69 4-1.69s2 .31 3.07 1.23c5.07 4.15 10.45 5.84 16.9 5.84 20.28 0 35.03-18.59 35.03-43.49 0-22.13-10.3-37.95-27.2-37.95-5.22 0-10.6 1.54-15.06 4.76-1.84 1.38-2.77 2-3.69 2-1.23 0-1.84-.92-1.84-2.61V8.27c0-4.76-2-7.22-5.53-7.22-1.54 0-3.69.46-6.91 2.46l-16.29 10.14c-3.69 2.3-4.46 4.3-4.46 5.84 0 2.15 1.38 4 4.46 5.84 2.3 1.54 3.23 2.92 3.23 10.91v53.63c0 5.53-1.38 6.76-3.69 6.76-3.69 0-4.76-4-4.76-7.53V42.69c0-6.45-2.46-8.76-5.99-8.76-2 0-4.3.61-6.76 1.69l-13.06 5.69c-5.38 2.3-6.91 4.46-6.91 7.38 0 1.84 1.08 3.69 4 5.38 2.3 1.54 3.23 3.23 3.23 9.83v18.29c0 8.3-5.99 10.14-9.83 10.14-5.38 0-7.84-3.23-7.84-11.22l.31-38.42c0-6.45-2.46-8.76-5.99-8.76-2 0-4.3.61-6.76 1.69l-12.6 5.53c-5.38 2.3-6.91 4.46-6.91 7.38-.04 1.84 1.03 3.69 3.95 5.38zm155.81 39.18c0 5.99-.46 7.53-3.38 9.37-3.38 2.15-4.61 3.69-4.61 5.99 0 3.53 3.07 5.38 8.76 5.38h23.97c5.69 0 8.76-1.84 8.76-5.38 0-2.3-1.23-3.84-4.61-5.99-2.92-1.84-3.38-3.38-3.38-9.37V67.43c0-8.76 2.77-11.99 7.07-11.99 5.99 0 8.61 6.15 11.06 19.05 1.84 9.99 2.61 20.59 2.61 22.74 0 3.07-.15 4.15-2 5.22-3.38 2-4.61 3.69-4.61 5.99 0 3.69 2.46 5.38 7.99 5.38h24.28c5.53 0 8.14-1.69 8.14-5.38 0-2.3-1.38-4.15-4-5.99-2-1.38-2.3-2.3-4.61-19.21-1.54-11.83-2.92-21.21-6.45-32.73-3.53-11.52-9.37-16.6-18.29-16.6-7.07 0-11.83 3.07-16.6 6.15-1.08.77-2 1.08-2.77 1.08-.92 0-1.84-.46-1.84-2.61V8.27c0-4.76-2-7.22-5.53-7.22-1.54 0-3.69.46-6.91 2.46l-16.29 10.14c-3.69 2.3-4.46 4.3-4.46 5.84 0 2.15 1.38 4 4.46 5.84 2.3 1.54 3.23 2.92 3.23 10.91v56.85zm-187.77 0c0 5.99-.46 7.53-3.38 9.37-3.38 2.15-4.61 3.69-4.61 5.99 0 3.53 3.07 5.38 8.76 5.38h23.97c5.69 0 8.76-1.84 8.76-5.38 0-2.3-1.23-3.84-4.61-5.99-2.92-1.84-3.38-3.38-3.38-9.37V8.27c0-4.76-2-7.22-5.53-7.22-1.54 0-3.69.46-6.91 2.46l-16.3 10.14c-3.69 2.3-4.46 4.3-4.46 5.84 0 2.15 1.38 4 4.46 5.84 2.3 1.54 3.23 2.92 3.23 10.91v56.85z" />
                </svg>
              </div>
              <div className="footer-right">
                <h2>Contact</h2>
                <h3>moataztrojette@gmail.com</h3>
                <h3>bachouelsara1998@gmail.com</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
 
export default Index;