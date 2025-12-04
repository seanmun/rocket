'use client';

import { Player } from '@/data/types';
import { X, Trophy, Target, Zap, TrendingUp, MapPin, Award } from 'lucide-react';
import { useEffect } from 'react';

interface PlayerModalProps {
  player: Player;
  isOpen: boolean;
  onClose: () => void;
}

export function PlayerModal({ player, isOpen, onClose }: PlayerModalProps) {
  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-rpt-gray-900 rounded-xl border border-rpt-gray-700 shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-rpt-gray-800 hover:bg-rpt-gray-700 transition-colors z-10"
        >
          <X size={20} className="text-gray-400" />
        </button>

        {/* Header */}
        <div className="relative p-8 bg-gradient-to-br from-rpt-gray-800 to-rpt-gray-900 border-b border-rpt-gray-700">
          <div className="flex items-start gap-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-rpt-teal to-rpt-purple flex items-center justify-center flex-shrink-0 glow-purple">
              <span className="text-white font-heading font-bold text-3xl">
                {player.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h2 className="font-heading font-bold text-3xl">{player.name}</h2>
                <div className="px-3 py-1 rounded-full bg-rpt-purple/20 border border-rpt-purple/30">
                  <span className="text-rpt-purple text-sm font-bold">RANK #{player.ranking}</span>
                </div>
              </div>
              {player.nickname && (
                <p className="text-xl text-rpt-teal mb-3">"{player.nickname}"</p>
              )}
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-rpt-teal" />
                  <span>{player.hometown}</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-2">
                  <Award size={16} className="text-rpt-purple" />
                  <span>Tour Card #{player.tourCard}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="p-8 border-b border-rpt-gray-700">
          <p className="text-gray-300 leading-relaxed">{player.bio}</p>
        </div>

        {/* Stats Grid */}
        <div className="p-8 border-b border-rpt-gray-700">
          <h3 className="font-heading font-bold text-2xl mb-6 flex items-center gap-2">
            <Trophy className="w-6 h-6 text-rpt-teal" />
            Season Stats
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-rpt-gray-800 rounded-lg p-4 border border-rpt-gray-700">
              <div className="text-sm text-gray-400 mb-1">Total Points</div>
              <div className="text-2xl font-heading font-bold text-rpt-purple">
                {player.stats.totalPoints}
              </div>
            </div>
            <div className="bg-rpt-gray-800 rounded-lg p-4 border border-rpt-gray-700">
              <div className="text-sm text-gray-400 mb-1">Average Score</div>
              <div className="text-2xl font-heading font-bold text-rpt-teal">
                {player.stats.averageScore}
              </div>
            </div>
            <div className="bg-rpt-gray-800 rounded-lg p-4 border border-rpt-gray-700">
              <div className="text-sm text-gray-400 mb-1">High Score</div>
              <div className="text-2xl font-heading font-bold text-rpt-aqua">
                {player.stats.highScore}
              </div>
            </div>
            <div className="bg-rpt-gray-800 rounded-lg p-4 border border-rpt-gray-700">
              <div className="text-sm text-gray-400 mb-1">Wins</div>
              <div className="text-2xl font-heading font-bold text-rpt-yellow">
                {player.stats.wins}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            <div className="bg-gradient-to-br from-rpt-teal/10 to-transparent rounded-lg p-4 border border-rpt-teal/30">
              <div className="flex items-center gap-2 mb-1">
                <Zap size={16} className="text-rpt-teal" />
                <div className="text-sm text-gray-400">Break & Runs</div>
              </div>
              <div className="text-xl font-heading font-bold">{player.stats.breakAndRuns}</div>
            </div>
            <div className="bg-gradient-to-br from-rpt-purple/10 to-transparent rounded-lg p-4 border border-rpt-purple/30">
              <div className="flex items-center gap-2 mb-1">
                <Target size={16} className="text-rpt-purple" />
                <div className="text-sm text-gray-400">Ball-in-Hand Runs</div>
              </div>
              <div className="text-xl font-heading font-bold">{player.stats.ballInHandRuns}</div>
            </div>
            {player.stats.breakPercentage && (
              <div className="bg-gradient-to-br from-rpt-aqua/10 to-transparent rounded-lg p-4 border border-rpt-aqua/30">
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp size={16} className="text-rpt-aqua" />
                  <div className="text-sm text-gray-400">Break %</div>
                </div>
                <div className="text-xl font-heading font-bold">{player.stats.breakPercentage}%</div>
              </div>
            )}
            {player.stats.runoutPercentage && (
              <div className="bg-gradient-to-br from-rpt-yellow/10 to-transparent rounded-lg p-4 border border-rpt-yellow/30">
                <div className="flex items-center gap-2 mb-1">
                  <Trophy size={16} className="text-rpt-yellow" />
                  <div className="text-sm text-gray-400">Runout %</div>
                </div>
                <div className="text-xl font-heading font-bold">{player.stats.runoutPercentage}%</div>
              </div>
            )}
          </div>
        </div>

        {/* Recent Performances */}
        {player.recentPerformances && player.recentPerformances.length > 0 && (
          <div className="p-8">
            <h3 className="font-heading font-bold text-2xl mb-6 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-rpt-purple" />
              Recent Performances
            </h3>
            <div className="space-y-3">
              {player.recentPerformances.map((performance, index) => (
                <div
                  key={index}
                  className="bg-rpt-gray-800 rounded-lg p-4 border border-rpt-gray-700 hover:border-rpt-teal transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="font-heading font-bold text-lg mb-1">{performance.eventName}</h4>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <MapPin size={14} className="text-rpt-teal" />
                        <span>{performance.location}</span>
                        <span>•</span>
                        <span>{new Date(performance.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <div className="text-xs text-gray-400">Score</div>
                        <div className="font-heading font-bold text-xl text-rpt-purple">{performance.score}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-400">Place</div>
                        <div className={`font-heading font-bold text-xl ${
                          performance.placement === 1 ? 'text-rpt-yellow' :
                          performance.placement === 2 ? 'text-gray-300' :
                          performance.placement === 3 ? 'text-orange-400' : 'text-gray-400'
                        }`}>
                          {performance.placement === 1 && '🥇'}
                          {performance.placement === 2 && '🥈'}
                          {performance.placement === 3 && '🥉'}
                          {performance.placement > 3 && `#${performance.placement}`}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
