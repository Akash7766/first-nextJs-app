import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid d-felx justify-content-between">
        <Link href="newses">
          <a className="navbar-brand">Newses</a>
        </Link>

        <Link href="/photos">
          <a className="navbar-brand" aria-current="page">
            Photos
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
