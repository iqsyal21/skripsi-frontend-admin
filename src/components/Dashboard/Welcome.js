import React from 'react';

const Welcome = () => {
    return (
        <div className="mx-4 my-4">
            <h3>Selamat datang di dashboard admin</h3>
            <h4>Di dashboard ini anda dapat mengelola data dan informasi</h4>
            <h5>List Data</h5>
            <ul>
                <li>Agenda</li>
                <li>Artikel</li>
                <li>Stok Vaksin</li>
                <li>Jadwal Vaksinasi</li>
                <li>pendaftaran Vaksinasi</li>
            </ul>
        </div>
    );
}

export default Welcome;
