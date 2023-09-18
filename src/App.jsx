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
import Alert from "./components/alert/Alert.jsx"
import '../node_modules/swiper/swiper.scss';
import '../node_modules/swiper/swiper-bundle.min.css'
import '../node_modules/swiper/modules/navigation.scss'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalActive: true,
            alertStatus: false,
            alertText: "",
            alertColor: "",
        }
        this.onShow = this.onShow.bind(this)
        this.openModal = this.openModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
        this.logIn = this.logIn.bind(this)

    }
    // Функция уведомления
    onShow() {
        this.setState({
            alertStatus: true
        })
        setTimeout(()=>{
            this.setState({
                alertStatus: false
            })    
        }, 2500)
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
            this.closeModal()
            this.onShow()
            this.setState({
                alertText: "Good",
                alertColor: "alert__text good"
            });
        } else {
            this.onShow()
            this.setState({
                alertText: "Bad, try again!",
                alertColor: "alert__text invalid"
            });
        }
    }
    render () {
        return (
            <>  
                <Alert 
                    onShow={this.state.alertStatus}
                    text={this.state.alertText}
                    textColor={this.state.alertColor}
                />
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