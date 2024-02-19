export interface PlayerData {
    id: number;
    identifiers: string[];
    ping: number;
    coords: { x: number, y: number, z: number };
    health: number;
    armor: number;
    weapon: string;
    weaponName: string;
    name: string;
    job: { job_name: string, job_grade: number };
    loadout: string[];
    inventory: string[];
    money: { cash: number, bank: number, crypto: number };
    userFrameworkIdentifier: string;
}
