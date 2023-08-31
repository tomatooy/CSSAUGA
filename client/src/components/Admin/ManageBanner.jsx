import React from 'react'
import Button from 'react-bootstrap/Button';

export default function ManageBanner(props) {
    const {onClickFunction} = props;
    return (
        <div>
        <Button variant="secondary" onClick = {onClickFunction}> Manage Banner</Button>
        </div>
    )
}
