import React from 'react';
import {Link} from "react-router-dom";

function Tr(props){
    return <tr>
        <th scope="row">{props.index}</th>
        <td><Link to={"/post/"+props.id}>{props.title}</Link></td>
        <td>{props.author}</td>
        <td>{props.date_added}</td>
    </tr>
}

export class PostList extends React.Component{
    constructor() {
        super();
        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        fetch("http://le0nid.beget.tech/php/getPosts.php")
            .then(response=>response.json())
            .then(result=>{
                console.log(result);
                let rows = [];
                for (let i = 0; i < result.length; i++) {
                    rows.push(<Tr
                        index={i+1}
                        id={result[i].id}
                        title={result[i].title}
                        author={result[i].author}
                        date_added={result[i].data_added}
                    />)
                }
                this.setState({
                    posts: rows
                })
            })
    }

    render() {
        return <div className="container my-auto mt-5">
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Заголовок</th>
                    <th scope="col">Автор</th>
                    <th scope="col">Дата добавления</th>
                </tr>
                </thead>
                <tbody>
                {this.state.posts}
                </tbody>
            </table>
        </div>
    }
}