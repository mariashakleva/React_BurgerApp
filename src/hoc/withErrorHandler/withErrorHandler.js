import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component{

        constructor(props){
            super(props);
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            })
            this.resInterceptor = axios.interceptors.response.use(res=>res, error => {
                this.setState({error: error});
            });

        }

        componentWillUnmount(){
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.request.eject(this.resInterceptor);
        }

        state ={
            error: null
        }

        errorConfirmedHandler = () => {
            this.setState({error: null});
        }

        render(){
            return(
                <Aux>
                    <Modal show={this.state.error} modalClosed ={this.errorConfirmedHandler}>
                        {/* {this.state.error.message ? this.state.error.message : null} */}Error
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            )
        }
    }
};

export default withErrorHandler;