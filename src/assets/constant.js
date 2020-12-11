import React from 'react'
// src/assets/images/icons/activities
import { ReactComponent as AchievementSvg } from './images/icons/activities/achievement.svg'
import { ReactComponent as AddSvg } from './images/icons/activities/add.svg'
import { ReactComponent as BahtSvg } from './images/icons/activities/baht.svg'
import { ReactComponent as BarChartSvg } from './images/icons/activities/bar-chart.svg'
import { ReactComponent as BloggingSvg } from './images/icons/activities/blogging.svg'
import { ReactComponent as BoatFloatingSvg } from './images/icons/activities/boat-floating.svg'
import { ReactComponent as BoatSvg } from './images/icons/activities/boat.svg'
import { ReactComponent as ClownFishSvg } from './images/icons/activities/clown-fish.svg'
import { ReactComponent as ConversationSvg } from './images/icons/activities/conversation.svg'
import { ReactComponent as CopywritingSvg } from './images/icons/activities/copywriting.svg'
import { ReactComponent as DinosaurSvg } from './images/icons/activities/dinosaur.svg'
import { ReactComponent as EarthGlobeSvg } from './images/icons/activities/earth-globe.svg'
import { ReactComponent as EthnicSvg } from './images/icons/activities/ethnic.svg'
import { ReactComponent as FingerSvg } from './images/icons/activities/finger.svg'
import { ReactComponent as FriendSvg } from './images/icons/activities/friend.svg'
import { ReactComponent as GeltSvg } from './images/icons/activities/gelt.svg'
import { ReactComponent as GiantSwingSvg } from './images/icons/activities/giant-swing.svg'
import { ReactComponent as GroupSvg } from './images/icons/activities/group.svg'
import { ReactComponent as OnlineShopSvg } from './images/icons/activities/online-shop.svg'
import { ReactComponent as PeopleSvg } from './images/icons/activities/people.svg'
import { ReactComponent as WaterfallSvg } from './images/icons/activities/waterfall.svg'
// ---
import { ReactComponent as AppleSvg } from './images/icons/auth/apple.svg'
import { ReactComponent as FacebookSvg } from './images/icons/auth/facebook.svg'
import { ReactComponent as GoogleSvg } from './images/icons/auth/google.svg'
import { ReactComponent as EmailSvg } from './images/icons/auth/email.svg'
// ---
export const svgList = {
	AppleSvg,
	FacebookSvg,
	GoogleSvg,
	EmailSvg,
	//
	AchievementSvg,
	AddSvg,
	BahtSvg,
	BarChartSvg,
	BloggingSvg,
	BoatFloatingSvg,
	BoatSvg,
	ClownFishSvg,
	ConversationSvg,
	CopywritingSvg,
	DinosaurSvg,
	EarthGlobeSvg,
	EthnicSvg,
	FingerSvg,
	FriendSvg,
	GeltSvg,
	GiantSwingSvg,
	GroupSvg,
	OnlineShopSvg,
	PeopleSvg,
	WaterfallSvg,
}
// ----
export const SvgComponent = ({
	name,
	className,
	options,
}) => {
	const SvgSource = svgList[name]
	return <SvgSource className={className} {...options} />
}

export default svgList
