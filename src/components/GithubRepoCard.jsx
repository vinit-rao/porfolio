import { useEffect, useState } from 'react';
import './GithubRepoCard.css';

const GithubRepoCard = ({ username, repo }) => {
    const [repoData, setRepoData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Ping GitHub API for live repo stats
        fetch(`https://api.github.com/repos/${username}/${repo}`)
            .then(res => res.json())
            .then(data => {
                setRepoData(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch GitHub data", err);
                setLoading(false);
            });
    }, [username, repo]);

    if (loading || !repoData) {
        return (
            <div className="gh-repo-printout" style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>
                <i className="fas fa-satellite-dish fa-spin"></i> FETCHING LIVE GITHUB TELEMETRY...
            </div>
        );
    }

    return (
        <a href={repoData.html_url} target="_blank" rel="noreferrer" className="gh-repo-printout">
            <div className="gh-repo-header">
                <h3 className="gh-repo-title">
                    <i className="fab fa-github"></i> {repoData.name}
                </h3>
                <div title="Live Connection" className="gh-live-dot"></div>
            </div>
            
            <p className="gh-repo-desc">
                {repoData.description || "No description provided."}
            </p>
            
            <div className="gh-repo-stats">
                {repoData.language && (
                    <div className="gh-stat-item">
                        <span className="gh-lang-dot"></span> {repoData.language}
                    </div>
                )}
                <div className="gh-stat-item">
                    <i className="fas fa-star"></i> {repoData.stargazers_count}
                </div>
                <div className="gh-stat-item">
                    <i className="fas fa-code-branch"></i> {repoData.forks_count}
                </div>
            </div>

            {/* LIVE COMMIT HEATMAP */}
            <div className="gh-heatmap-section">
                <span className="gh-heatmap-title">COMMIT ACTIVITY // USER:{username}</span>
                <div className="gh-heatmap-img-wrapper">
                    {/* The D91C1C matches your exact red accent hex color */}
                    <img src={`https://ghchart.rshah.org/D91C1C/${username}`} alt="Commit Heatmap" />
                </div>
            </div>
        </a>
    );
};

export default GithubRepoCard;