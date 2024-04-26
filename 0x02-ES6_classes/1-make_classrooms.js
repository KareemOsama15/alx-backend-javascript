import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const idxs = [19, 20, 34];
  const arr = [];
  for (const idx of idxs) {
    arr.push(new ClassRoom(idx));
  }
  return arr;
}
