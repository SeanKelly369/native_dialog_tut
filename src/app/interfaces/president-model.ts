export interface PresidentModel {
    id: number;
    name: string;
    party: string;
    image: string;
    periodInOffice: string[];
    description: string;
    notableAchievements: string[];
    isSeen: boolean;
}