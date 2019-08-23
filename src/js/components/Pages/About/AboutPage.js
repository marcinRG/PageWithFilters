import React from 'react';
import imgBiz from './../../../../images/about/bizmeeting.jpg';
import imgCity from './../../../../images/about/city-small.jpg';
import imgFactory from './../../../../images/about/factory2.jpg';
import imgWareHouse from './../../../../images/about/warehouse2.jpg';

export function AboutPage() {
    return (
        <div className="page about-component">
            <h3 className="component-title">About us</h3>
            <section className="txt-section">
                <div className="img">
                    <img src={imgBiz} alt="biz"/>
                </div>
                <div className="description">
                    <h4>Repellat rerum saepe sapiente</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate dignissimos esse
                        laudantium
                        quaerat voluptatum. Aliquid atque cum cumque, dolorem doloribus molestias necessitatibus
                        perspiciatis quas quidem reiciendis repudiandae rerum sit.
                    </p>
                    <p>Aut ipsa iure quia quis? Ad alias assumenda deleniti, dolore, exercitationem expedita, illo iure
                        iusto laborum libero mollitia nostrum perferendis quam quos reiciendis repellat repellendus
                        saepe
                        sed suscipit velit voluptatem.
                    </p>
                    <p>A adipisci animi assumenda atque dolorum exercitationem expedita fuga, labore, nemo perspiciatis
                        quae recusandae repellendus saepe sed tempore vel voluptas. Ea, est facilis inventore neque
                        nihil
                        nisi quibusdam sit veniam?
                    </p>
                    <p>Accusamus alias asperiores commodi culpa cum deserunt, dolore ea earum enim exercitationem fuga,
                        harum iste iusto minima modi mollitia non obcaecati odio possimus quas quasi rem repellat, sed
                        suscipit voluptatem.
                    </p>
                </div>
            </section>
            <section className="txt-section">
                <div className="img">
                    <img src={imgCity} alt="city"/>
                </div>
                <div className="description">
                    <h4>At cupiditate dignissimos esse</h4>
                    <p>A adipisci animi assumenda atque dolorum exercitationem expedita fuga, labore, nemo perspiciatis
                        quae recusandae repellendus saepe sed tempore vel voluptas. Ea, est facilis inventore neque
                        nihil
                        nisi quibusdam sit veniam?
                    </p>
                    <p>Accusamus alias asperiores commodi culpa cum deserunt, dolore ea earum enim exercitationem fuga,
                        harum iste iusto minima modi mollitia non obcaecati odio possimus quas quasi rem repellat, sed
                        suscipit voluptatem.
                    </p>
                    <p>Atque autem beatae deleniti earum eveniet expedita necessitatibus numquam porro repellat
                        repudiandae? Fuga, molestiae, sed. Eveniet ex inventore iste quo tempore! Aliquam corporis
                        cumque
                        dignissimos dolores explicabo minima vel voluptate!
                    </p>
                    <p>Animi at commodi dolorum eius eos exercitationem fuga illo ipsam, iste libero magnam nam neque,
                        nostrum praesentium provident quae repellat rerum saepe sapiente suscipit ullam unde veritatis
                        voluptatibus! Explicabo, totam.
                    </p>
                </div>
            </section>
            <section className="txt-section">
                <div className="img">
                    <img src={imgFactory} alt="factory"/>
                </div>
                <div className="description">
                    <h4>Dolorem doloribus molestias</h4>
                    <p>Aut ipsa iure quia quis? Ad alias assumenda deleniti, dolore, exercitationem expedita, illo iure
                        iusto laborum libero mollitia nostrum perferendis quam quos reiciendis repellat repellendus
                        saepe
                        sed suscipit velit voluptatem.
                    </p>
                    <p>A adipisci animi assumenda atque dolorum exercitationem expedita fuga, labore, nemo perspiciatis
                        quae recusandae repellendus saepe sed tempore vel voluptas. Ea, est facilis inventore neque
                        nihil
                        nisi quibusdam sit veniam?
                    </p>
                    <p>Accusamus alias asperiores commodi culpa cum deserunt, dolore ea earum enim exercitationem fuga,
                        harum iste iusto minima modi mollitia non obcaecati odio possimus quas quasi rem repellat, sed
                        suscipit voluptatem.
                    </p>
                    <p>Atque autem beatae deleniti earum eveniet expedita necessitatibus numquam porro repellat
                        repudiandae? Fuga, molestiae, sed. Eveniet ex inventore iste quo tempore! Aliquam corporis
                        cumque
                        dignissimos dolores explicabo minima vel voluptate!
                    </p>
                </div>
            </section>
            <section className="txt-section">
                <div className="img">
                    <img src={imgWareHouse} alt="warehouse"/>
                </div>
                <div className="description">
                    <h4>Iste libero magnam nam</h4>
                    <p>A adipisci animi assumenda atque dolorum exercitationem expedita fuga, labore, nemo perspiciatis
                        quae recusandae repellendus saepe sed tempore vel voluptas. Ea, est facilis inventore neque
                        nihil
                        nisi quibusdam sit veniam?
                    </p>
                    <p>Accusamus alias asperiores commodi culpa cum deserunt, dolore ea earum enim exercitationem fuga,
                        harum iste iusto minima modi mollitia non obcaecati odio possimus quas quasi rem repellat, sed
                        suscipit voluptatem.
                    </p>
                    <p>Atque autem beatae deleniti earum eveniet expedita necessitatibus numquam porro repellat
                        repudiandae? Fuga, molestiae, sed. Eveniet ex inventore iste quo tempore! Aliquam corporis
                        cumque
                        dignissimos dolores explicabo minima vel voluptate!
                    </p>
                    <p>Animi at commodi dolorum eius eos exercitationem fuga illo ipsam, iste libero magnam nam neque,
                        nostrum praesentium provident quae repellat rerum saepe sapiente suscipit ullam unde veritatis
                        voluptatibus! Explicabo, totam.
                    </p>
                </div>
            </section>
            <section className="section-contact">
                <h2>Contact</h2>
                <div className="container">
                    <form className="contact-form">
                        <input type="text" placeholder="your name"/>
                        <input type="text" placeholder="your email"/>
                        <input type="text" placeholder="your phone number"/>
                        <textarea placeholder="your message" rows="6"></textarea>
                        <button className="send-btn">
                            <i className="icon ion-android-mail"></i>
                            Submit
                        </button>
                    </form>
                    <div className="address">
                        <label>Address</label>
                        <p>123 City name, Street, City, Country</p>
                        <label>E-mail</label>
                        <a href="mailto:address@domain.com">address@domain.com</a>
                        <label>Phone</label>
                        <p>+012 345 6789</p>
                    </div>
                </div>
            </section>
        </div>);
}
