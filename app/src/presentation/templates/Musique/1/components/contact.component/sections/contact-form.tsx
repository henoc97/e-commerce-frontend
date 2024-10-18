"use client"
import { useState } from 'react';
import { Button } from '../../../../../../components/ui/button';
import { Input } from '../../../../../../components/ui/input';
import { Textarea } from '../../../../../../components/ui/textarea';
import { toast } from '../../../../../../components/ui/use-toast';
import { Label } from '../../../../../../components/ui/label';

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the form data to your backend
        console.log('Form submitted:', formData);
        toast({
            title: 'Message Sent',
            description:
                "We've received your message and will get back to you soon.",
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                    id="subject"
                    name="subject"
                    placeholder="Enter the subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                    className="min-h-[100px]"
                    id="message"
                    name="message"
                    placeholder="Enter your message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                />
            </div>
            <Button type="submit" className="w-full bg-[#00B2A9] text-white">
                Send Message
            </Button>
        </form>
    );
};

export default ContactForm;
