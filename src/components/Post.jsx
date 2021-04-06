import React from "react";

export class Post extends React.Component{
    constructor(props) {  // 1
        super(props);
        this.state = {
            title: "",
            text: "",
            data_added: "",
            author: ""
        }
    }

    componentDidMount() { // 3
        const formData = new FormData();
        formData.append("id",this.props.match.params.id);
        fetch("http://le0nid.beget.tech/php/getPosts.php",{
            method: "POST",
            body: formData
        }).then(response=>response.json())
            .then(result=>{
                this.setState({
                    title: result.title,
                    text: result.text,
                    date_added: result.data_added,
                    author: result.author
                })
            })
    }

    render() { // 2
        return <div>
            <h1 className="text-center">{this.state.title}</h1>
            <p>{this.state.text}</p>
            <p>Добавлено:{this.state.data_added}</p>
            <p>Автор:{this.state.author}</p>
        </div>
    }
}