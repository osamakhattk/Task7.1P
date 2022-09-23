import React from "react";
import "./Articles.css"
import { Card, Image } from 'semantic-ui-react'

const Articles = () => {
    return <div>
    <Card>
    <Image src='./article.jpeg' wrapped ui={false} />
        <Card.Content>
            <Card.Header>Deep into Green</Card.Header>
            <Card.Meta>Published in 2016</Card.Meta>
            <Card.Description>
                The history of a color.
            </Card.Description>
        </Card.Content>
    </Card>
    </div>
}

export default Articles