// TagBlock.tsx
export interface TagBlockProps {
	children: string;
}

// GradationButton.tsx
export interface GradationButtonProps {
	children: string;
	width?: string;
}

// SearchBar.tsx
export interface SearchBarProps {
	width?: string;
	height?: string;
	$inputWidth?: string;
	fontSize?: string;
	fontColor?: string;
	$borderColor?: string;
	$backgroundColor?: string;
	placeholder?: string;
	$placeholderColor?: string;
	iconSrc?: string;
	iconAlt?: string;
	iconWidth?: string;
	iconHeight?: string;
}

// Card.tsx
export interface CardProps {
	link: Link;
}

// Header.tsx
export interface HeaderProps {
	email: string | undefined;
	profileImageSource: string | undefined;
}

// ProfileSection.tsx
export interface User {
	id: number;
	name: string;
	email: string;
	profileImageSource: string;
}

// ListSection.tsx
export interface Link {
	createdAt: string;
	description: string;
	id: number;
	imageSource: string;
	title: string;
	url: string;
}

export interface Owner {
	id: number;
	name: string;
	profileImageSource: string;
}

export interface Folder {
	count: number;
	id: number;
	links: Link[];
	name: string;
	owner: Owner;
}

export interface Tag {
	createdAt: string;
	id: number;
	link: { count: number };
	name: string;
	user_id: number;
}
