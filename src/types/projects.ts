export interface BaseProject {
  title: string;
  description: string;
  link: string;
}

export interface ExternalProject extends BaseProject {
  type?: never;
  fileType?: never;
}

export interface DownloadableProject extends BaseProject {
  type: 'download';
  fileType: string;
}

export type Project = ExternalProject | DownloadableProject;

export interface ProjectsData {
  projects: Project[];
}