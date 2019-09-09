import React from 'react';

export function SmallForm() {
    return (
        <section className="promo">
            <h2>Get Discount 35% Off</h2>
            <form>
                <input type="text" placeholder="Enter your email..."/>
                <input type="button" value="Send"/>
            </form>
        </section>
    );
}
