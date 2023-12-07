import styled from 'styled-components';
import { FolderCardProps } from '../../utils/interfaces';

const Container = styled.div`
	width: 100%;
	box-shadow: 0px 5px 25px 0px #00000014;
	border-radius: 15px;
	cursor: pointer;
`;

const ImageWrapper = styled.div`
	width: 100%;
	height: 20rem;
	display: flex;
	justify-content: center;
	align-items: center;

	img {
		width: 100%;
		height: 100%;
		border-radius: 15px 15px 0 0;
		object-fit: cover;
	}
`;

const BottomWrapper = styled.div`
	width: 100%;
	height: 13.5rem;
	padding: 1.5rem 2rem;
`;

const CreatedBefore = styled.div`
	font-size: 1.3rem;
	color: #666666;
`;

const Description = styled.div`
	font-size: 1.6rem;
	margin: 1rem 0;
	height: 4.9rem;
	line-height: 24px;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
`;

const CreatedAtContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const CreatedAt = styled.div`
	color: #333;
`;

const KebabButton = styled.div`
	cursor: pointer;
`;

function FolderCard({ link }: FolderCardProps) {
	// console.log(link);
	const getCreatedTime = () => {
		const splitedCreatedAt = link.created_at.split('-');

		const year = Number(splitedCreatedAt[0]);
		const month = Number(splitedCreatedAt[1]);
		const day = Number(splitedCreatedAt[2].substring(0, 2));

		const createdTime = year + '. ' + month + '. ' + day;
		return createdTime;
	};

	const getCreatedBefore = () => {
		let createdBeforeMessage = '';

		const splitedCreatedAt = link.created_at.split('T');

		const [createdYear, createdMonth, createdDay] = splitedCreatedAt[0]
			.split('-')
			.map((val) => Number(val));
		const [createdHours, createdMinutes, createdSeconds] = splitedCreatedAt[1]
			.split(':')
			.map((val, index) => (index === 2 ? Number(val.substring(0, 2)) : Number(val)));

		const createdDate = new Date(
			createdYear,
			createdMonth,
			createdDay,
			createdHours,
			createdMinutes,
			createdSeconds
		);

		const now = new Date();

		const diffSecs = Math.floor((now.getTime() - createdDate.getTime()) / 1000);
		const diffMins = Math.floor(diffSecs / 60);
		const diffHours = Math.floor(diffMins / 60);
		const diffDays = Math.floor(diffHours / 24);
		const diffMonths = Math.floor(diffDays / 30);
		const diffYears = Math.floor(diffMonths / 12);

		if (diffMins < 2) {
			createdBeforeMessage = '1 minute ago';
		} else if (diffMins <= 59) {
			createdBeforeMessage = `${diffMins} minutes ago`;
		} else if (diffHours <= 23) {
			createdBeforeMessage = `${diffHours} hours ago`;
		} else if (diffDays <= 30) {
			createdBeforeMessage = `${diffDays} days ago`;
		} else if (diffMonths <= 11) {
			createdBeforeMessage = `${diffMonths} months ago`;
		} else {
			createdBeforeMessage = `${diffYears} years ago`;
		}

		return createdBeforeMessage;
	};

	return (
		<Container onClick={() => window.open(link.url, '_blank')}>
			<ImageWrapper>
				{link.image_source ? (
					<img src={link.image_source} alt='card-img' />
				) : (
					<p>No Image!</p>
				)}
			</ImageWrapper>
			<BottomWrapper>
				<CreatedAtContainer>
					<CreatedBefore>{getCreatedBefore()}</CreatedBefore>
					<KebabButton>
						<img src='images/kebab.png' alt='kebab-icon' />
					</KebabButton>
				</CreatedAtContainer>
				{link.description ? (
					<Description>{link.description}</Description>
				) : (
					<Description>no description!</Description>
				)}
				<CreatedAt>{getCreatedTime()}</CreatedAt>
			</BottomWrapper>
		</Container>
	);
}

export default FolderCard;