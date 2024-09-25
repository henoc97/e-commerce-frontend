interface AlertNewsPropos {
    topic: string;
    description: string;
}

const HeaderAlertNews: React.FC<AlertNewsPropos> = ({ topic, description }) => {
    return (
        <p className="text-center-md p-2">
            <b className="text-mintgreenP1 mr-1">{topic}:</b>
            {description}
        </p>
    );
};

export default HeaderAlertNews;
