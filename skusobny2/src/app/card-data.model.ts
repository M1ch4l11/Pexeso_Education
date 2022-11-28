export interface CardData {
    imageId: string;
    state: 'default' | 'flipped' | 'matched';
    sound: string;
    path: string;
    preklad: string;
    front: string
}