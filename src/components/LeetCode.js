import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCircle, faTrophy, faStar, faCode, faRankingStar } from '@fortawesome/free-solid-svg-icons';
import './LeetCode.css';

const LeetCode = () => {
  const [leetcodeStats, setLeetcodeStats] = useState({
    totalSolved: 0,
    easySolved: 0,
    mediumSolved: 0,
    hardSolved: 0,
    globalRank: 0
  });
  
  const [olicyberStats, setOlicyberStats] = useState({
    username: '',
    score: 0,
    solvedChallenges: 0,
    bestCategory: '',
    scoreboardPosition: 0
  });
  
  const [leetcodeLoading, setLeetcodeLoading] = useState(true);
  const [olicyberLoading, setOlicyberLoading] = useState(true);
  const [leetcodeError, setLeetcodeError] = useState(null);
  const [olicyberError, setOlicyberError] = useState(null);

  useEffect(() => {

    const fetchLeetCodeStats = async () => {
      try {
        setLeetcodeLoading(true);
        const response = await fetch('https://alfa-leetcode-api.onrender.com/userProfile/nick007sbt');
        
        if (!response.ok) {
          throw new Error('Failed to fetch LeetCode stats');
        }
        
        const data = await response.json();
        
        setLeetcodeStats({
          totalSolved: data.totalSolved,
          easySolved: data.easySolved,
          mediumSolved: data.mediumSolved,
          hardSolved: data.hardSolved,
          globalRank: data.ranking
        });
        
        setLeetcodeLoading(false);
      } catch (error) {
        console.error('Error fetching LeetCode stats:', error);
        setLeetcodeError(`Failed to load LeetCode statistics: ${error.message}`);
        setLeetcodeLoading(false);
      }
    };
    

    const fetchOlicyberStats = async () => {
      try {
        setOlicyberLoading(true);
        const response = await fetch('https://raw.githubusercontent.com/Nick-Maro/ocbadge_themes/main/player_data.json');
        
        if (!response.ok) {
          throw new Error('Failed to fetch Olicyber stats');
        }
        
        const data = await response.json();
        
        setOlicyberStats({
          username: data.username,
          score: data.score,
          solvedChallenges: data.solved_challenges,
          bestCategory: data.best_category,
          scoreboardPosition: data.scoreboard_position
        });
        
        setOlicyberLoading(false);
      } catch (error) {
        console.error('Error fetching Olicyber stats:', error);
        setOlicyberError(`Failed to load Olicyber statistics: ${error.message}`);
        setOlicyberLoading(false);
      }
    };
    
    fetchLeetCodeStats();
    fetchOlicyberStats();
  }, []);

  return (
    <section id="coding-stats">
      <div className="container">
        <h2 className="section-title">My Coding Stats</h2>
        
        <div className="stats-row">
          {}
          <div className="stats-container leetcode-container">
            <h3 className="platform-title">LeetCode Stats</h3>
            {leetcodeLoading ? (
              <div className="leetcode-loading">Loading LeetCode stats...</div>
            ) : leetcodeError ? (
              <div className="leetcode-error">{leetcodeError}</div>
            ) : (
              <>
                <div className="leetcode-header">
                  <div className="leetcode-logo">
                    <img 
                      src="https://assets.leetcode.com/static_assets/public/icons/favicon-192x192.png" 
                      alt="LeetCode Logo" 
                      className="leetcode-icon"
                    />
                  </div>
                  <h3 className="leetcode-profile-name">@nick007sbt</h3>
                </div>
                
                <div className="leetcode-stats-grid">
                  <div className="leetcode-stat-card">
                    <div className="leetcode-stat-icon">
                      <FontAwesomeIcon icon={faCheckCircle} />
                    </div>
                    <div className="leetcode-stat-info">
                      <span className="leetcode-stat-number">{leetcodeStats.totalSolved}</span>
                      <span className="leetcode-stat-label">Problems Solved</span>
                    </div>
                  </div>
                  
                  <div className="leetcode-stat-card">
                    <div className="leetcode-stat-icon leetcode-easy">
                      <FontAwesomeIcon icon={faCircle} />
                    </div>
                    <div className="leetcode-stat-info">
                      <span className="leetcode-stat-number">{leetcodeStats.easySolved}</span>
                      <span className="leetcode-stat-label">Easy</span>
                    </div>
                  </div>
                  
                  <div className="leetcode-stat-card">
                    <div className="leetcode-stat-icon leetcode-medium">
                      <FontAwesomeIcon icon={faCircle} />
                    </div>
                    <div className="leetcode-stat-info">
                      <span className="leetcode-stat-number">{leetcodeStats.mediumSolved}</span>
                      <span className="leetcode-stat-label">Medium</span>
                    </div>
                  </div>
                  
                  <div className="leetcode-stat-card">
                    <div className="leetcode-stat-icon leetcode-hard">
                      <FontAwesomeIcon icon={faCircle} />
                    </div>
                    <div className="leetcode-stat-info">
                      <span className="leetcode-stat-number">{leetcodeStats.hardSolved}</span>
                      <span className="leetcode-stat-label">Hard</span>
                    </div>
                  </div>
                </div>
                
                <div className="leetcode-rank-container">
                  <div className="leetcode-rank-badge">
                    <span className="leetcode-rank-label">Global Rank</span>
                    <span className="leetcode-rank-number">#{leetcodeStats.globalRank.toLocaleString()}</span>
                  </div>
                  <a 
                    href="https://leetcode.com/nick007sbt/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="leetcode-profile-btn"
                  >
                    View Profile
                  </a>
                </div>
              </>
            )}
          </div>
          
          {}
          <div className="stats-container olicyber-container">
            <h3 className="platform-title">Olicyber Stats</h3>
            {olicyberLoading ? (
              <div className="olicyber-loading">Loading Olicyber stats...</div>
            ) : olicyberError ? (
              <div className="olicyber-error">{olicyberError}</div>
            ) : (
              <>
                <div className="olicyber-header">
                  <div className="olicyber-logo">
                    <FontAwesomeIcon icon={faTrophy} className="olicyber-icon" />
                  </div>
                  <h3 className="olicyber-profile-name">@{olicyberStats.username}</h3>
                </div>
                
                <div className="olicyber-stats-grid">
                  <div className="olicyber-stat-card">
                    <div className="olicyber-stat-icon">
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div className="olicyber-stat-info">
                      <span className="olicyber-stat-number">{olicyberStats.score.toLocaleString()}</span>
                      <span className="olicyber-stat-label">Total Score</span>
                    </div>
                  </div>
                  
                  <div className="olicyber-stat-card">
                    <div className="olicyber-stat-icon">
                      <FontAwesomeIcon icon={faCode} />
                    </div>
                    <div className="olicyber-stat-info">
                      <span className="olicyber-stat-number">{olicyberStats.solvedChallenges}</span>
                      <span className="olicyber-stat-label">Challenges Solved</span>
                    </div>
                  </div>
                  
                  <div className="olicyber-stat-card">
                    <div className="olicyber-stat-icon">
                      <FontAwesomeIcon icon={faTrophy} />
                    </div>
                    <div className="olicyber-stat-info">
                      <span className="olicyber-stat-number">{olicyberStats.bestCategory}</span>
                      <span className="olicyber-stat-label">Best Category</span>
                    </div>
                  </div>
                  
                  <div className="olicyber-stat-card">
                    <div className="olicyber-stat-icon">
                      <FontAwesomeIcon icon={faRankingStar} />
                    </div>
                    <div className="olicyber-stat-info">
                      <span className="olicyber-stat-number">#{olicyberStats.scoreboardPosition}</span>
                      <span className="olicyber-stat-label">Rank</span>
                    </div>
                  </div>
                </div>
                {}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeetCode;