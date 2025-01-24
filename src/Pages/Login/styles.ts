import styled from "styled-components";
import { motion } from "framer-motion";

export const Page = styled.div`
    display: flex;
    height: 100vh;
    overflow: hidden;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const Banner = styled.div`
    width: 45%;
    height: 100vh;
    background: linear-gradient(135deg, #2586d4 0%, #1a6aa8 100%);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    .banner-content {
        color: white;
        text-align: center;
        z-index: 1;
        padding: 0 2rem;

        h1 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
            font-weight: 600;
        }

        p {
            font-size: 1.1rem;
            opacity: 0.9;
        }
    }

    @media (max-width: 768px) {
        width: 100%;
        height: 35vh;

        .banner-content {
            h1 {
                font-size: 2rem;
            }

            p {
                font-size: 1rem;
            }
        }
    }
`;

export const AnimatedBox = styled(motion.div)`
    position: absolute;
    width: 500px;
    height: 500px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50px;
    transform: rotate(45deg);

    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 50px;
        transform: scale(1.2);
    }

    @media (max-width: 768px) {
        width: 300px;
        height: 300px;
    }
`;

export const Container = styled.div`
    width: 55%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f8f9fa;

    @media (max-width: 768px) {
        width: 100%;
        height: 65vh;
    }
`;

export const Form = styled.form`
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;
    padding: 2rem;
    background: white;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);

    img {
        width: 150px;
        margin: 0 auto;
        margin-bottom: 1rem;
    }

    .form-footer {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .links {
            display: flex;
            justify-content: space-between;
            font-size: 0.9rem;

            a {
                color: var(--primary);
                text-decoration: none;
                transition: color 0.3s ease;

                &:hover {
                    color: #1a6aa8;
                }
            }
        }
    }

    @media (max-width: 768px) {
        width: 90%;
        padding: 1.5rem;
    }
`;