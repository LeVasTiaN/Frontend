import React, { Component } from 'react';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            element5State: 0,
            element6State: 0
        };
    }

    changeColorFirst = () => {
        this.setState(prevState => ({
            element5State: (prevState.element5State + 1) % 3
        }));
    };

    changeColorSecond = () => {
        this.setState(prevState => ({
            element6State: (prevState.element6State + 1) % 3
        }));
    };

    getFirstStyle = () => {
        switch (this.state.element5State) {
            case 1: return { backgroundColor: 'green', color: 'red' };
            case 2: return { backgroundColor: 'yellow', color: 'blue' };
            default: return { backgroundColor: '', color: 'black' };
        }
    };

    getSecondStyle = () => {
        switch (this.state.element6State) {
            case 1: return { backgroundColor: 'grey', color: 'white' };
            case 2: return { backgroundColor: 'blue', color: 'yellow' };
            default: return { backgroundColor: '', color: 'black' };
        }
    };

    render() {
        return (
            <main>
                <p>Хобі:</p>
                <ul>
                    <li 
                        onClick={this.changeColorFirst} 
                        style={this.getFirstStyle()}
                    >
                        Читання
                    </li>
                    <li 
                        onClick={this.changeColorSecond} 
                        style={this.getSecondStyle()}
                    >
                        Спорт
                    </li>
                    <li>Програмування</li>
                </ul>

                <p>Улюблені фільми:</p>
                <ol>
                    <li>Оселя Зла</li>
                    <li>Месники: Фінал</li>
                    <li>Барбі</li>
                </ol>

                <p>
                    Амстерда́м (нід. Amsterdam) — столиця Нідерландів. Розташований у провінції Північна Голландія в гирлі річки Амстел. Амстердам сполучений з Північним морем морським каналом. Амстердам розташований на північному заході Нідерландів у провінції Північна Голландія в гирлі річки Амстел на березі затоки Ейсселмер. Амстел, протікаючи амстердамським середмістям, утворює мережу каналів і проток, крім того, окремим каналом місто з'єднане з Північним морем, притому перебуваючи на висоті 2 метри нижче від рівня моря.
                </p>
            </main>
        );
    }
}

export default Content;