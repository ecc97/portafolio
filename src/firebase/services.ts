import { collection, getDocs } from 'firebase/firestore';
import { db } from './config';
import { Project } from '@/interfaces/IProject';

export const getProjects = async (): Promise<Project[]> => {
  try {
    const projectsCol = collection(db, 'projects-njs');
    const projectSnapshot = await getDocs(projectsCol);
    const projectsList = projectSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Project[];
    
    return projectsList;
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
};
