import React, { Component } from 'react';
import Header from "./Header";
import Bar from './chart/Bar';
import Pie from './chart/Pie';
import Line from './chart/Line';
import Doughnut from './chart/Doughnut';

export default class Layout extends Component {

    state = {
        selectedOption: 'gasoline'
    }

    handleOnChange = event => {
        this.setState({
            selectedOption: event.target.value
        })
    }

    render() {

        const { selectedOption } = this.state
        const { gasoline: { price, month, colorBar } } = this.props
        const { developer: { members, framework, colorPie } } = this.props
        const { djangoReleases: { version, date, colorL } } = this.props
        const { projects: { completed, year, colorD } } = this.props

        return (
            <div>
                <Header />
                <div className='container'>
                    <div className="row mt-4">
                        <div className="col-md-8 offset-2">
                            <div className="card">
                                <div className="card-header">
                                    <span>
                                        {selectedOption === 'gasoline' ?
                                            'Preço da gasolina' :
                                            selectedOption === 'developer' ?
                                                'Desenvolvedores' :
                                                selectedOption === 'djangoReleases' ?
                                                    'Djago versões' :
                                                    'Projetos Realizados'}
                                    </span>
                                </div>
                                <div className="card-body">
                                    {selectedOption === 'gasoline' ?
                                        <Bar data={price}
                                            labels={month}
                                            backgroundColor={colorBar}
                                            title='Preço da Gasolina' /> :

                                        selectedOption === 'developer' ?
                                            <Pie
                                                data={members}
                                                labels={framework}
                                                backgroundColor={colorPie}
                                                title='Desenvolvedores' /> :
                                            selectedOption === 'djangoReleases' ?
                                                <Line
                                                    data={version}
                                                    labels={date}
                                                    backgroundColor={colorL}
                                                    title='Django versões' /> :
                                                <Doughnut
                                                    data={completed}
                                                    labels={year}
                                                    backgroundColor={colorD}
                                                    title='Projetos' />}
                                </div>
                                <div className="card-footer">
                                    <form action="" className="form-inline">
                                        <div className="form-group mx-auto">
                                            <label htmlFor="id_gasoline">
                                                <input
                                                    id='id_gasoline'
                                                    type="radio"
                                                    value='gasoline'
                                                    checked={selectedOption === 'gasoline'}
                                                    onChange={this.handleOnChange}
                                                    className='form-control mr-1'
                                                />
                                            Gasolina
                                        </label>
                                        </div>
                                        <div className="form-group mx-auto">
                                            <label htmlFor="id_developer">
                                                <input
                                                    id='id_developer'
                                                    type="radio"
                                                    value='developer'
                                                    checked={selectedOption === 'developer'}
                                                    onChange={this.handleOnChange}
                                                    className='form-control mr-1'
                                                />
                                            Desenvolvedores
                                        </label>
                                        </div>
                                        <div className="form-group mx-auto">
                                            <label htmlFor="id_djangoReleases ml-3">
                                                <input
                                                    id='id_developer'
                                                    type="radio"
                                                    value='djangoReleases'
                                                    checked={selectedOption === 'djangoReleases'}
                                                    onChange={this.handleOnChange}
                                                    className='form-control mr-1'
                                                />
                                            Django versões
                                        </label>
                                        </div>
                                        <div className="form-group mx-auto">
                                            <label htmlFor="id_projects ml-3">
                                                <input
                                                    id='id_projects'
                                                    type="radio"
                                                    value='projects'
                                                    checked={selectedOption === 'projects'}
                                                    onChange={this.handleOnChange}
                                                    className='form-control mr-1'
                                                />
                                            Projetos realizados
                                        </label>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
