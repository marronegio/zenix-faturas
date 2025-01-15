import styled from "styled-components";

export const Page = styled.body`
    display: flex;
`

export const Banner = styled.div`
    width: 45%;
    height: 100vh;
    background-image: url("https://images.pexels.com/photos/1325725/pexels-photo-1325725.jpeg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
`

export const Container = styled.div`
    width: 55%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Form = styled.form`
    width: 550px;
    height: 550px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 10px;
    padding: 0 30px;
    gap: 20px;

    img {
        width: 200px;
    }

    h1 {
        color: var(--primary);
    }
`