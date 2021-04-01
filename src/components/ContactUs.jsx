import React from "react";

export function ContactUs(){
    return (
        <div className="container my-5">
            <form action="">
                <div className="mb-3"><input type="text"  placeholder="Введите Emai" className="form-control"/></div>
                <div className="mb-3"><input type="text" placeholder="Как к вам обращаться" className="form-control"/></div>
                <div className="mb-3"><textarea type="text" placeholder="Введите текст" className="form-control"/></div>
                <div className="mb-3"><input type="submit" className="form-control btn btn-primary"/></div>
            </form>
        </div>
    )
}