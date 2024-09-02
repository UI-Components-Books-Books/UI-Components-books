import { useEffect, useState } from 'react';

export const useVideo = (ref, pathVideo, pathname) => {
  const [videos, setVideos] = useState({ video1: '', video2: '' });
  const defaulVideo = { video1: '/', video2: '/' };
  const options = {
    attributes: true,
    characterData: true,
    childList: true,
    subtree: true
  };

  // Funcción para actualizar los videos del interprete segun el path y slide
  const setUpdateVideoSlide = (path, slide = 0) => {
    path = path.replace(/\/$/gi, '');
    if (pathVideo) {
      const result = pathVideo.filter((e) => e.to === path);
      if (result.length > 0) {
        const { slides } = result[0];
        const videos = slides[slide < 0 ? 0 : slide];
        setVideos(videos || defaulVideo);
      } else {
        setVideos(defaulVideo);
      }
    } else {
      setVideos(defaulVideo);
    }
  };

  // Funcción para actualizar los videos del interprete segun el path, slide y el modal
  const setUpdateVideoModal = (path, slide = 0, id_modal = '') => {
    path = path.replace(/\/$/gi, '');
    if (pathVideo) {
      const result = pathVideo.filter((e) => e.to === path);
      if (result.length > 0) {
        const { slides } = result[0];
        const { modals } = slides[slide < 0 ? 0 : slide];
        const modal = (modals || []).filter((e) => e.id === id_modal);
        const videos = modal[0];
        setVideos(videos || defaulVideo);
      } else {
        setVideos(defaulVideo);
      }
    } else {
      setVideos(defaulVideo);
    }
  };

  const onSetUpdateVideo = () => {
    const Sections = document.querySelectorAll('.video-interpreter-ui-panel > .video-interpreter-ui-section');
    if (Sections) {
      const index = [...Sections].findIndex((item) => !item.hasAttribute('hidden'));
      setUpdateVideoSlide(pathname, index < 0 ? 0 : index);

      const TabPanel = document.querySelectorAll('.video-interpreter-ui-tabpanel');
      if (TabPanel.length > 0) {
        const index = [...TabPanel].findIndex((item) => !item.hasAttribute('hidden'));
        setUpdateVideoSlide(pathname, index < 0 ? 0 : index);
      }

      const containers = document.querySelector('.video-interpreter-ui-container:not([hidden])');
      if (containers) {
        setUpdateVideoModal(pathname, index, containers.id);
      }

      const Popover = document.querySelector('.video-interpreter-ui-popover:not([hidden])');
      if (Popover) {
        setUpdateVideoModal(pathname, index, Popover.id);
      }

      const Modal = document.querySelector('.video-interpreter-ui-modal:not([hidden])');
      if (Modal) {
        setUpdateVideoModal(pathname, index, Modal.id);
      }
    }
  };

  useEffect(() => {
    if (ref) {
      const observer = new MutationObserver(onSetUpdateVideo);
      observer.observe(document.querySelector(ref || 'body'), options);
      return () => observer.disconnect();
    }
  }, [onSetUpdateVideo, options]);

  return videos;
};
