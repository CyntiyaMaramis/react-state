import React, { Component } from 'react';

class CardProduct extends Component {
    state = {
        days:0
    }

    handlerDaysBerubah = (newvalue) =>{
        this.props.onDaysChange(newvalue);
    }

    handlerTambah = () =>{
        this.setState({
            days:this.state.days+1
        },() => {
            this.handlerDaysBerubah(this.state.days)
        })
    }

    handlerKurang = () =>{
        if (this.state.days >0){
            this.setState({
                days:this.state.days-1
            },() =>{
                this.handlerDaysBerubah(this.state.days)
            })
        }
    }

    render() {
        return (
            <div>
                <div class="card text-center">
                  <div class="card-header">
                    Featured
                  </div>
                  <div class="card-body">
                    <h5 class="card-title"></h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary" onClick={this.handlerTambah}>Tambah</a>
                    <a href="#" class="btn btn-primary" onClick={this.handlerKurang}>Kurang</a>
                  </div>
                  <div class="card-footer text-muted">
                    {this.state.days} days ago
                  </div>
                </div>
            </div>
        )
    }
}

export default CardProduct;