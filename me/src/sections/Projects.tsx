import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Magnetic } from '../components/Magnetic';

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        title: 'MOVIE RECOMMENDATION SYSTEM',
        subtitle: 'CONTENT-BASED ML APPLICATION',
        description: 'Developed a machine learning–based movie recommendation system using content-based filtering and cosine similarity. Integrated TMDB API for real-time data.',
        stack: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Streamlit', 'TMDB API'],
        year: '2024'
    },
    {
        title: 'GAN FOR IMAGE GENERATION',
        subtitle: 'DEEP LEARNING PROJECT',
        description: 'Implemented a Generative Adversarial Network (GAN) to generate realistic synthetic images using adversarial training with CNNs.',
        stack: ['Python', 'PyTorch', 'TensorFlow', 'Deep Learning', 'Computer Vision'],
        year: '2024'
    },
    {
        title: 'RESUME SCREENING AI',
        subtitle: 'NLP-POWERED RECRUITMENT TOOL',
        description: 'Built an AI-powered resume screening system using NLP techniques for text preprocessing, TF-IDF vectorization, and cosine similarity matching.',
        stack: ['Python', 'NLP', 'Scikit-learn', 'Pandas', 'Streamlit'],
        year: '2024'
    }
];

export const Projects: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const projectCards = containerRef.current.querySelectorAll('.project-card');

        projectCards.forEach((card) => {
            gsap.fromTo(card,
                {
                    clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
                    opacity: 0
                },
                {
                    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
                    opacity: 1,
                    duration: 1.2,
                    ease: 'power4.inOut',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 80%',
                    }
                }
            );
        });
    }, []);

    return (
        <section ref={containerRef} className="section" style={{ padding: 'var(--pad-page) 0', borderTop: '1px solid var(--grid-line)' }}>
            <div style={{ padding: '0 var(--pad-page)', marginBottom: '4rem' }}>
                <h2 className="text-small">04 / SELECTED WORKS</h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
                {projects.map((project, i) => (
                    <div
                        key={i}
                        className="project-card"
                        style={{
                            position: 'relative',
                            padding: '4rem var(--pad-page)',
                            borderBottom: '1px solid var(--grid-line)',
                            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.01))'
                        }}
                    >
                        {/* Hover Effect Overlay */}
                        <div className="project-hover-bg" style={{
                            position: 'absolute', inset: 0, backgroundColor: 'var(--text-main)',
                            opacity: 0, zIndex: -1, transition: 'opacity 0.4s ease'
                        }} />

                        <div className="project-card-main">
                            <h3 className="text-large" style={{ marginBottom: '1rem', letterSpacing: '-0.03em' }}>{project.title}</h3>
                            <div className="text-small" style={{ marginBottom: '2rem' }}>{project.subtitle}</div>
                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                {project.stack.map((tech, j) => (
                                    <span key={j} style={{
                                        fontSize: '0.8rem',
                                        padding: '0.3rem 0.8rem',
                                        border: '1px solid var(--text-muted)',
                                        borderRadius: '20px',
                                        color: 'var(--text-muted)'
                                    }}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="project-card-description" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                            <p className="text-medium" style={{ fontFamily: 'var(--font-display)', marginBottom: '2rem' }}>
                                {project.description}
                            </p>


                        </div>

                        <div className="project-card-meta">
                            {project.year}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
