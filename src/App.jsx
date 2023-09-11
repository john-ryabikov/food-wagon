import React from "react"
import Header from "./components/header/Header.jsx"
import BlockOne from "./components/block-1/BlockOne.jsx"
import BlockTwo from "./components/block-2/BlockTwo.jsx"
import BlockThree from "./components/block-3/BlockThree.jsx"
import BlockFour from "./components/block-4/BlockFour.jsx"
import BlockFive from "./components/block-5/BlockFive.jsx"
import BlockSix from "./components/block-6/BlockSix.jsx"
import Footer from "./components/footer/Footer.jsx"
import Modal from "./components/modal/Modal.jsx"
import '../node_modules/swiper/swiper.scss';
import '../node_modules/swiper/swiper-bundle.min.css'
import '../node_modules/swiper/modules/navigation.scss'

class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            modalActive: true,
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.logIn = this.logIn.bind(this)
    }
    // Функции модального окна
    openModal() {
        const status = this.state.modalActive;
        this.setState({
            modalActive: !status
        });
    }
    closeModal() {
        this.setState({
            modalActive: true
        });
    }
    logIn(acc) {
        if (acc.user_name === "Admin" && acc.user_pass === "admin") {
            alert("Succses!");
            this.closeModal()
        } else {
            alert("Login or password is invalid! Try again.")
        }
    }
    render () {
        return (
            <>
                <Modal 
                    active={this.state.modalActive ? "modal" : "modal active"}
                    activeCont={this.state.modalActive ? "modal__content" : "modal__content_active"}  
                    closeModal={this.closeModal}
                    logAction={this.logIn}
                />
                <main className="wrapper">
                    <Header 
                        openModal={this.openModal} 
                        account={this.state.account}
                    />
                    <BlockOne/>
                    <BlockTwo/>
                    <BlockThree/>
                    <BlockFour/>
                    <BlockFive/>
                    <BlockSix/>
                </main>
                <Footer/>
            </>
        )
    }
}

export default App;