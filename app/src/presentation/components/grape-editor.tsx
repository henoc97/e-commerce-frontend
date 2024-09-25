'use client';

import { useEffect, useRef } from 'react';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';

const GrapeEditor: React.FC = () => {
    const editorRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (editorRef.current) {
            const editor = grapesjs.init({
                container: editorRef.current,
                fromElement: true,
                width: 'auto',
                height: '100vh',
                storageManager: false,
                panels: { defaults: [] },
                blockManager: {
                    appendTo: '#blocks',
                },
                styleManager: {
                    appendTo: '#styles-container',
                },
            });

            return () => {
                editor.destroy();
            };
        }
    }, []);

    return (
        <div>
            <div id="blocks"></div>
            <div ref={editorRef} style={{ border: '1px solid #ccc' }}></div>
            <div id="styles-container"></div>
        </div>
    );
};

export default GrapeEditor;
