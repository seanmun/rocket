import { TeamMember } from './types';

export const team: TeamMember[] = [
  {
    id: 'rodney-morris',
    name: 'Rodney "Rocket" Morris',
    title: 'Co-Founder & Tour Commissioner',
    bio: 'World Champion and Hall of Fame player with over 30 years of professional experience. Rodney is the visionary behind the Rocket Run-Out© format and the driving force behind modernizing professional pool. His passion for the game and commitment to innovation have created a revolutionary new chapter in billiards.',
  },
  {
    id: 'ed-glode',
    name: 'Ed "EJ" Glode',
    title: 'Co-Founder & Business Operations',
    bio: 'Business strategist and pool enthusiast with over 40 years of experience in competitive billiards. EJ\'s numerical intuition and business acumen have been instrumental in developing the Rocket Run-Out© format and building the infrastructure for the Rocket Pool Tour. His partnership with Rodney combines competitive excellence with strategic vision.',
  },
];

export function getTeamMemberById(id: string): TeamMember | undefined {
  return team.find(t => t.id === id);
}
