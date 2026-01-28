import './form.css';

export default function FormPage() {
    return (
        <section className="booking-section">
            <div className="search-box">

                <div className="user-column">
                    <label className="input-box">
                        <span className="material-icons">person</span>
                        <input type="text" placeholder="Name" />
                    </label>

                    <label className="input-box">
                        <span className="material-icons">phone</span>
                        <input type="tel" placeholder="Contact Number" />
                    </label>
                </div>

                <div className="address-row">
                    <label className="input-box">
                        <span className="material-icons">place</span>
                        <input type="text" placeholder="Pickup Address" />
                        <span className="material-icons search-icon">search</span>
                    </label>

                    <div className="swap-icon">
                        <span className="material-icons">swap_horiz</span>
                    </div>

                    <label className="input-box">
                        <span className="material-icons">place</span>
                        <input type="text" placeholder="Drop Address" />
                        <span className="material-icons search-icon">search</span>
                    </label>
                </div>

            </div>

            <div className="action-buttons">
                <button className="later-btn">
                    <span className="material-icons">event</span>
                    Go Later
                </button>

                <button className="now-btn">
                    Go Now
                    <span className="material-icons">chevron_right</span>
                </button>
            </div>

        </section>
    );
}
