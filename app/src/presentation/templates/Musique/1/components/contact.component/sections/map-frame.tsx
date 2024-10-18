import { Mail, MapPin, Phone } from 'lucide-react';
import { Card } from '../../../../../../components/ui/card';

const MapFrame: React.FC = () => {
    return (
        <Card>
            <div style={{ overflow: 'hidden', borderRadius: 'inherit' }}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.3439506339903!2d-86.77919968473958!3d36.15949918008336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886466579b6da269%3A0x7b1f3b0b12e71a8b!2sNashville%2C%20TN%2037203!5e0!3m2!1sen!2sus!4v1623344496096!5m2!1sen!2sus"
                    width="600"
                    height="450"
                    style={{ border: 0, borderRadius: 'inherit' }}
                    allowFullScreen={true}
                    loading="lazy"
                ></iframe>
            </div>
        </Card>
    );
};

export default MapFrame;
