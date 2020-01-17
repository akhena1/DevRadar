import React, { useState, useEffect } from 'react';

function DevForm( {onSubmit} ) {

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;

                console.log(position)
                setLatitude(latitude);
                setLongitude(longitude);
            },
            (err) => {
                console.log(err);
            },
            {
                timeout: 30000,
            }
        )
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();

        await onSubmit({

            github_username,
            techs,
            latitude,
            longitude

        });

        setGithubUsername('');
        setTechs('');
    }

    const [github_username, setGithubUsername] = useState('');
    const [techs, setTechs] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    return (
        <form onSubmit={handleSubmit}>
            <div className="input-block">
                <label htmlFor="">Usuário do Github</label>
                <input
                    name="github_username"
                    id="github_username"
                    required
                    value={github_username}
                    onChange={e => setGithubUsername(e.target.value)} />
            </div>


            <div className="input-block">
                <label htmlFor="">Techs</label>
                <input
                    name="techs"
                    id="techs"
                    required
                    value={techs}
                    onChange={e => setTechs(e.target.value)} />
            </div>

            <div className="input-group">
                <div className="input-block">

                    <label htmlFor="latitude">Latitude</label>
                    <input
                        value={latitude}
                        type="number"
                        name="latitude"
                        id="latitude"
                        required
                        onChange={e => setLatitude(e.target.value)} />

                </div>

                <div className="input-block">
                    <label htmlFor="longitude">Longitude</label>
                    <input
                        value={longitude}
                        type="number"
                        name="longitude"
                        id="longitude"
                        required
                        onChange={e => setLongitude(e.target.value)}></input>
                </div>

            </div>

            <button type="submit">Salvar</button>
        </form>
    )
}

export default DevForm;