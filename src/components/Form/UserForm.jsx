import { useState } from "react";

const UserNewOrder = () => {

    const [firstName, setFirstName] = useState("");
    const [phoneNum, setPhoneNum] = useState();
    const [address, setAddress] = useState("");
    const [orderPriority, setOrderPriority] = useState(false);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(`First name: ${firstName}\nPhone number: ${phoneNum}\nAddress: ${address}\npriority order: ${orderPriority}`)
    }

    return (
        <div className="user__new-order">
            <h2 >Ready to order? Let's go!</h2>
            <form className="user__form" onSubmit={handleFormSubmit}>
                <div className="user__name">
                    First Name
                    <input type="text" placeholder="Enter your first name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div className="user__phone">
                    Phone number
                    <input type="tel" placeholder="Enter your phone number (format: 067-567-67-67)" pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}" value={phoneNum} onChange={(e) => setPhoneNum(e.target.value)} />
                </div>
                <div className="user__address">
                    Address
                    <input type="text" placeholder="Enter your first name" value={address} onChange={(e) => setAddress(e.target.value)} />
                </div>
                <div className="user__priority">
                    <input type="checkbox" checked={orderPriority} onChange={(e) => setOrderPriority(e.target.checked)} />
                    Want to you give your order priority?
                </div>
                <button type="submit">Order now for €39.00</button>
            </form>
        </div>
    )
}

export default UserNewOrder;