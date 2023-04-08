export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
	/** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
	DateTime: any;
	/** Geometry scalar type */
	GeoJSONPoint: any;
};

/** AdminAuthConnection */
export type AdminAuthConnection = {
	__typename?: 'AdminAuthConnection';
	accessToken: Scalars['String'];
	expireRefreshTokenDate: Scalars['DateTime'];
	expireTokenDate: Scalars['DateTime'];
	refreshToken: Scalars['String'];
	user: AdminUser;
};

export type AdminChangeStatusReviewInput = {
	active: Scalars['Boolean'];
	id: Scalars['String'];
};

export type AdminCreateBannerInput = {
	linkBanner?: InputMaybe<Scalars['String']>;
	mediaIds: Array<Scalars['String']>;
	name: Scalars['String'];
	positionId: Scalars['String'];
};

export type AdminCreateBrandInput = {
	mediaId?: InputMaybe<Scalars['String']>;
	name: Scalars['String'];
};

export type AdminCreateBrandNewInput = {
	isDisplayTopSearch: Scalars['Boolean'];
	mediaId?: InputMaybe<Scalars['String']>;
	name: Scalars['String'];
};

export type AdminCreateCarBuyingNeedInput = {
	brand: Scalars['String'];
	budget?: InputMaybe<Scalars['String']>;
	buyerName?: InputMaybe<Scalars['String']>;
	descriptionOther?: InputMaybe<Scalars['String']>;
	isCustomer: Scalars['Boolean'];
	isInstallmentPurchase: Scalars['Boolean'];
	isInsuranceConsultant: Scalars['Boolean'];
	isOther: Scalars['Boolean'];
	isVehicleInspectionService: Scalars['Boolean'];
	model: Scalars['String'];
	numKilometerCarRun?: InputMaybe<Scalars['String']>;
	phone: Scalars['String'];
	provinceId?: InputMaybe<Scalars['String']>;
	status?: InputMaybe<StatusCarBuyingNeedEnum>;
	userId?: InputMaybe<Scalars['String']>;
	userSellerIds?: InputMaybe<Array<Scalars['String']>>;
	vehicleLife?: InputMaybe<Scalars['String']>;
};

export type AdminCreateCarPurchaseCostProvinceInput = {
	bodyInsuranceOneYear: Scalars['Float'];
	civilInsurance: Scalars['Float'];
	licensePlateFee: Scalars['Float'];
	provinceId: Scalars['String'];
	registrationFeeNewCar: Scalars['Float'];
	registrationFeeOldCar: Scalars['Float'];
	registry: Scalars['Float'];
	roadMaintenanceFee: Scalars['Float'];
};

export type AdminCreateDriverType = {
	nameEn: Scalars['String'];
	nameVi: Scalars['String'];
};

export type AdminCreateFuelEconomy = {
	isLess: Scalars['Boolean'];
	kilometer: Scalars['Float'];
	liter: Scalars['Float'];
	nameEn: Scalars['String'];
	nameVi: Scalars['String'];
};

export type AdminCreateModelnput = {
	brand: Scalars['String'];
	name: Scalars['String'];
};

export type AdminCreateMultiVersion = {
	mediaId?: InputMaybe<Scalars['String']>;
	model: Scalars['String'];
	name?: InputMaybe<Scalars['String']>;
	numKilometerCarRun?: InputMaybe<Scalars['String']>;
	priceCarVersion: Scalars['Float'];
	yearManufacture?: InputMaybe<Scalars['String']>;
};

export type AdminCreateMultiVersionInput = {
	multiVersions: Array<AdminCreateMultiVersion>;
};

export type AdminCreatePaymentItemInput = {
	amount: Scalars['Float'];
	currency: PaymentItemCurrencyEnum;
};

export type AdminCreateQuestionAnswerSimulationInput = {
	minuteFrom: Scalars['Float'];
	minuteTo: Scalars['Float'];
	no: Scalars['Float'];
	point: Scalars['Float'];
	secondFrom: Scalars['Float'];
	secondTo: Scalars['Float'];
};

export type AdminCreateQuestionGroupInput = {
	name: Scalars['String'];
	questions: Array<Scalars['String']>;
};

export type AdminCreateQuestionInput = {
	answers: Array<AdminEditQuestionAnswerInput>;
	answerType: QuestionAnswerTypeEnum;
	content: Scalars['String'];
	explainAnswer?: InputMaybe<Scalars['String']>;
	imageExplainAnswer?: InputMaybe<Scalars['String']>;
	images?: InputMaybe<Array<Scalars['String']>>;
	no: Scalars['String'];
	type: Array<QuestionTypeEnum>;
};

export type AdminCreateQuestionSimulationGroupInput = {
	name: Scalars['String'];
	questions: Array<Scalars['String']>;
};

export type AdminCreateQuestionSimulationInput = {
	answers: Array<AdminCreateQuestionAnswerSimulationInput>;
	content: Scalars['String'];
	explainAnswer?: InputMaybe<Scalars['String']>;
	images?: InputMaybe<Array<Scalars['String']>>;
	no: Scalars['Float'];
	type: Array<QuestionSimulationTypeEnum>;
	videos?: InputMaybe<Array<Scalars['String']>>;
};

export type AdminCreateSeatInput = {
	name: Scalars['String'];
	value: Scalars['Float'];
};

export type AdminCreateVersionInput = {
	mediaId?: InputMaybe<Scalars['String']>;
	model: Scalars['String'];
	name: Scalars['String'];
	numKilometerCarRun?: InputMaybe<Scalars['String']>;
	priceCarVersion: Scalars['Float'];
	yearManufacture?: InputMaybe<Scalars['String']>;
};

export type AdminDashboardTotalInput = {
	numberMonth?: InputMaybe<Scalars['Float']>;
};

export type AdminDeleteOptionsInput = {
	id: Scalars['String'];
	type: PostMetaTypeEnum;
};

export type AdminEditBannerInput = {
	id: Scalars['String'];
	linkBanner?: InputMaybe<Scalars['String']>;
	mediaIds: Array<Scalars['String']>;
	name: Scalars['String'];
	positionId: Scalars['String'];
};

export type AdminEditBrandInput = {
	id: Scalars['String'];
	mediaId?: InputMaybe<Scalars['String']>;
	name: Scalars['String'];
};

export type AdminEditBrandNewInput = {
	id: Scalars['String'];
	isDisplayTopSearch: Scalars['Boolean'];
	mediaId?: InputMaybe<Scalars['String']>;
	name: Scalars['String'];
};

export type AdminEditCarBuyingNeedInput = {
	brand: Scalars['String'];
	budget?: InputMaybe<Scalars['String']>;
	buyerName?: InputMaybe<Scalars['String']>;
	descriptionOther?: InputMaybe<Scalars['String']>;
	id: Scalars['String'];
	isCustomer: Scalars['Boolean'];
	isInstallmentPurchase: Scalars['Boolean'];
	isInsuranceConsultant: Scalars['Boolean'];
	isOther: Scalars['Boolean'];
	isVehicleInspectionService: Scalars['Boolean'];
	model: Scalars['String'];
	numKilometerCarRun?: InputMaybe<Scalars['String']>;
	phone: Scalars['String'];
	provinceId?: InputMaybe<Scalars['String']>;
	status?: InputMaybe<StatusCarBuyingNeedEnum>;
	statusBuyingDemand?: InputMaybe<StatusBuyingDemandEnum>;
	userId?: InputMaybe<Scalars['String']>;
	userSellerIds?: InputMaybe<Array<Scalars['String']>>;
	vehicleLife?: InputMaybe<Scalars['String']>;
};

export type AdminEditCarPurchaseCostProvinceInput = {
	bodyInsuranceOneYear: Scalars['Float'];
	civilInsurance: Scalars['Float'];
	id: Scalars['String'];
	licensePlateFee: Scalars['Float'];
	registrationFeeNewCar: Scalars['Float'];
	registrationFeeOldCar: Scalars['Float'];
	registry: Scalars['Float'];
	roadMaintenanceFee: Scalars['Float'];
};

export type AdminEditDriverType = {
	id: Scalars['String'];
	nameEn: Scalars['String'];
	nameVi: Scalars['String'];
};

export type AdminEditFuelEconomy = {
	id: Scalars['String'];
	isLess: Scalars['Boolean'];
	kilometer: Scalars['Float'];
	liter: Scalars['Float'];
	nameEn: Scalars['String'];
	nameVi: Scalars['String'];
};

export type AdminEditGarageInput = {
	address: Scalars['String'];
	city?: InputMaybe<Scalars['String']>;
	description: Scalars['String'];
	district?: InputMaybe<Scalars['String']>;
	email?: InputMaybe<Scalars['String']>;
	id: Scalars['String'];
	latitude: Scalars['Float'];
	longitude: Scalars['Float'];
	medias: Array<Scalars['String']>;
	phone: Scalars['String'];
	province?: InputMaybe<Scalars['String']>;
	services: Array<GarageServicesTypeEnum>;
	title: Scalars['String'];
	userId?: InputMaybe<Scalars['String']>;
	ward?: InputMaybe<Scalars['String']>;
	website?: InputMaybe<Scalars['String']>;
};

export type AdminEditModelnput = {
	brand: Scalars['String'];
	id: Scalars['String'];
	name: Scalars['String'];
};

export type AdminEditMultiVersion = {
	id: Scalars['String'];
	mediaId?: InputMaybe<Scalars['String']>;
	model: Scalars['String'];
	name?: InputMaybe<Scalars['String']>;
	numKilometerCarRun?: InputMaybe<Scalars['String']>;
	priceCarVersion: Scalars['Float'];
	yearManufacture?: InputMaybe<Scalars['String']>;
};

export type AdminEditMultiVersionInput = {
	multiVersions: Array<AdminEditMultiVersion>;
};

export type AdminEditParkingInput = {
	address: Scalars['String'];
	closeOnPublicHolidays: Scalars['Boolean'];
	description: Scalars['String'];
	email?: InputMaybe<Scalars['String']>;
	id: Scalars['String'];
	latitude: Scalars['Float'];
	longitude: Scalars['Float'];
	medias: Array<Scalars['String']>;
	phone: Scalars['String'];
	priceProperties: Array<NewParkingWokingPricePropertiesInput>;
	sameWeekOfOperation: Scalars['Boolean'];
	title: Scalars['String'];
	total: Scalars['Float'];
	userId?: InputMaybe<Scalars['String']>;
	website?: InputMaybe<Scalars['String']>;
	workingTimes?: InputMaybe<Array<NewParkingWokingTimeInput>>;
};

export type AdminEditPaymentItemInput = {
	amount: Scalars['Float'];
	currency: PaymentItemCurrencyEnum;
	id: Scalars['String'];
};

export type AdminEditPostInput = {
	descriptionMeta: NewPostDescriptionInput;
	engine?: InputMaybe<NewPostEngineInput>;
	id: Scalars['String'];
	medias?: InputMaybe<Array<Scalars['String']>>;
	mediasHidePlate?: InputMaybe<Array<Scalars['String']>>;
	meta: NewPostMetaInput;
	plan: NewPostPlanInput;
	plateHidden?: InputMaybe<Scalars['Boolean']>;
	publishType: NewPostPublishTypeInput;
	styleMeta?: InputMaybe<NewPostStyleInput>;
	title?: InputMaybe<Scalars['String']>;
	userId: Scalars['String'];
	videoUrl?: InputMaybe<Scalars['String']>;
};

export type AdminEditQuestionAnswerInput = {
	content: Scalars['String'];
	correctAnswer: Scalars['Boolean'];
	no: Scalars['Float'];
};

export type AdminEditQuestionAnswerSimulationInput = {
	minuteFrom: Scalars['Float'];
	minuteTo: Scalars['Float'];
	no: Scalars['Float'];
	point: Scalars['Float'];
	secondFrom: Scalars['Float'];
	secondTo: Scalars['Float'];
};

export type AdminEditQuestionGroupInput = {
	id: Scalars['String'];
	name: Scalars['String'];
	questions: Array<Scalars['String']>;
};

export type AdminEditQuestionInput = {
	answers: Array<AdminEditQuestionAnswerInput>;
	answerType: QuestionAnswerTypeEnum;
	content: Scalars['String'];
	explainAnswer?: InputMaybe<Scalars['String']>;
	imageExplainAnswer?: InputMaybe<Scalars['String']>;
	images?: InputMaybe<Array<Scalars['String']>>;
	no: Scalars['String'];
	type: Array<QuestionTypeEnum>;
};

export type AdminEditQuestionSimulationGroupInput = {
	id: Scalars['String'];
	name: Scalars['String'];
	questions: Array<Scalars['String']>;
};

export type AdminEditQuestionSimulationInput = {
	answers?: InputMaybe<Array<AdminEditQuestionAnswerSimulationInput>>;
	content?: InputMaybe<Scalars['String']>;
	explainAnswer?: InputMaybe<Scalars['String']>;
	id: Scalars['String'];
	images?: InputMaybe<Array<Scalars['String']>>;
	type?: InputMaybe<Array<QuestionSimulationTypeEnum>>;
	videos?: InputMaybe<Array<Scalars['String']>>;
};

export type AdminEditSeatInput = {
	id: Scalars['String'];
	name: Scalars['String'];
	value: Scalars['Float'];
};

export type AdminEditVersionInput = {
	id: Scalars['String'];
	mediaId?: InputMaybe<Scalars['String']>;
	model: Scalars['String'];
	name: Scalars['String'];
	numKilometerCarRun?: InputMaybe<Scalars['String']>;
	priceCarVersion: Scalars['Float'];
	yearManufacture?: InputMaybe<Scalars['String']>;
};

export type AdminListPostInput = {
	brand?: InputMaybe<Scalars['String']>;
	createFrom?: InputMaybe<Scalars['String']>;
	createTo?: InputMaybe<Scalars['String']>;
	keyword?: InputMaybe<Scalars['String']>;
	location?: InputMaybe<Scalars['String']>;
	price?: InputMaybe<Scalars['Float']>;
	skip?: InputMaybe<Scalars['Float']>;
	status?: InputMaybe<PostStatusEnum>;
	take?: InputMaybe<Scalars['Float']>;
	titleAndPostId?: InputMaybe<Scalars['String']>;
	userId?: InputMaybe<Scalars['String']>;
};

export type AdminListQuestionGroupInput = {
	keyword?: InputMaybe<Scalars['String']>;
	skip?: InputMaybe<Scalars['Float']>;
	take?: InputMaybe<Scalars['Float']>;
};

export type AdminListQuestionInput = {
	keyword?: InputMaybe<Scalars['String']>;
	skip?: InputMaybe<Scalars['Float']>;
	take?: InputMaybe<Scalars['Float']>;
	type?: InputMaybe<QuestionTypeEnum>;
};

export type AdminListQuestionSimulationGroupInput = {
	keyword?: InputMaybe<Scalars['String']>;
	skip?: InputMaybe<Scalars['Float']>;
	take?: InputMaybe<Scalars['Float']>;
};

export type AdminListQuestionSimulationInput = {
	keyword?: InputMaybe<Scalars['String']>;
	skip?: InputMaybe<Scalars['Float']>;
	take?: InputMaybe<Scalars['Float']>;
	type?: InputMaybe<QuestionSimulationTypeEnum>;
};

export type AdminLoginInput = {
	deviceToken: Scalars['String'];
	email: Scalars['String'];
	password: Scalars['String'];
};

export type AdminNewGarageInput = {
	address: Scalars['String'];
	city?: InputMaybe<Scalars['String']>;
	description: Scalars['String'];
	district?: InputMaybe<Scalars['String']>;
	email?: InputMaybe<Scalars['String']>;
	latitude: Scalars['Float'];
	longitude: Scalars['Float'];
	medias: Array<Scalars['String']>;
	phone: Scalars['String'];
	province?: InputMaybe<Scalars['String']>;
	services: Array<GarageServicesTypeEnum>;
	title: Scalars['String'];
	userId?: InputMaybe<Scalars['String']>;
	ward?: InputMaybe<Scalars['String']>;
	website?: InputMaybe<Scalars['String']>;
};

export type AdminNewParkingInput = {
	address: Scalars['String'];
	closeOnPublicHolidays: Scalars['Boolean'];
	description: Scalars['String'];
	email?: InputMaybe<Scalars['String']>;
	latitude: Scalars['Float'];
	longitude: Scalars['Float'];
	medias: Array<Scalars['String']>;
	phone: Scalars['String'];
	priceProperties: Array<NewParkingWokingPricePropertiesInput>;
	sameWeekOfOperation: Scalars['Boolean'];
	title: Scalars['String'];
	total: Scalars['Float'];
	userId?: InputMaybe<Scalars['String']>;
	website?: InputMaybe<Scalars['String']>;
	workingTimes: Array<NewParkingWokingTimeInput>;
};

export type AdminNewPostInput = {
	descriptionMeta: NewPostDescriptionInput;
	engine?: InputMaybe<NewPostEngineInput>;
	medias?: InputMaybe<Array<Scalars['String']>>;
	mediasHidePlate?: InputMaybe<Array<Scalars['String']>>;
	meta: NewPostMetaInput;
	plan: NewPostPlanInput;
	plateHidden?: InputMaybe<Scalars['Boolean']>;
	publishType: NewPostPublishTypeInput;
	styleMeta?: InputMaybe<NewPostStyleInput>;
	title?: InputMaybe<Scalars['String']>;
	userId: Scalars['String'];
	videoUrl?: InputMaybe<Scalars['String']>;
};

export type AdminNotification = Node & {
	__typename?: 'AdminNotification';
	adminUserId?: Maybe<Scalars['String']>;
	contentEn: Scalars['String'];
	contentVi: Scalars['String'];
	createdAt: Scalars['String'];
	id: Scalars['ID'];
	schedule?: Maybe<Scalars['String']>;
	screenType?: Maybe<AdminNotificationScreenTypeEnum>;
	titleEn: Scalars['String'];
	titleVi: Scalars['String'];
	type: AdminNotificationEmailTypeEnum;
	updatedAt: Scalars['String'];
};

/** List Notification */
export type AdminNotificationConnection = Connection & {
	__typename?: 'AdminNotificationConnection';
	items: Array<AdminNotification>;
	links: PaginationLinks;
	meta: PaginationMeta;
};

export enum AdminNotificationEmailTypeEnum {
	ALL = 'ALL',
	EMAIL = 'EMAIL',
	NOTIFICATION = 'NOTIFICATION',
}

export type AdminNotificationPaginationInput = {
	createFrom?: InputMaybe<Scalars['String']>;
	createTo?: InputMaybe<Scalars['String']>;
	keyword?: InputMaybe<Scalars['String']>;
	skip?: InputMaybe<Scalars['Float']>;
	take?: InputMaybe<Scalars['Float']>;
	type?: InputMaybe<AdminNotificationEmailTypeEnum>;
};

export enum AdminNotificationScreenTypeEnum {
	POSTS = 'POSTS',
}

export type AdminSendNotificationInput = {
	contentEn: Scalars['String'];
	contentVi: Scalars['String'];
	notificationType: AdminNotificationEmailTypeEnum;
	role: UserRoleEnum;
	schedule?: InputMaybe<Scalars['String']>;
	screenType?: InputMaybe<AdminNotificationScreenTypeEnum>;
	titleEn: Scalars['String'];
	titleVi: Scalars['String'];
	userIds: Array<Scalars['String']>;
};

export type AdminUpdateBalance = {
	type: UserBalanceTypeEnum;
	userId: Scalars['String'];
	value: Scalars['Float'];
};

export type AdminUpdateStatusBannerInput = {
	id: Scalars['String'];
};

export type AdminUpdateStatusGarageInput = {
	id: Scalars['String'];
	reason?: InputMaybe<Scalars['String']>;
	status: StatusCommonEnum;
};

export type AdminUpdateStatusInput = {
	note?: InputMaybe<Scalars['String']>;
	postId: Scalars['String'];
	status: PostStatusEnum;
};

export type AdminUpdateStatusOptionsInput = {
	active: Scalars['Boolean'];
	id: Scalars['String'];
	type: PostMetaTypeEnum;
};

export type AdminUpdateStatusPlanInput = {
	id: Scalars['String'];
	status: Scalars['Boolean'];
};

export type AdminUpdateStatusTopSearchBrandInput = {
	id: Scalars['String'];
	isDisplayTopSearch: Scalars['Boolean'];
};

export type AdminUpdateTransferRequestInput = {
	approve: Scalars['Boolean'];
	id: Scalars['String'];
	moneyTransferReason?: InputMaybe<Scalars['String']>;
};

export type AdminUpdateUserAvatarInput = {
	mediaId: Scalars['String'];
	userId: Scalars['String'];
};

export type AdminUpdateUserInput = {
	createdAt?: InputMaybe<Scalars['DateTime']>;
	email?: InputMaybe<Scalars['String']>;
	firstName?: InputMaybe<Scalars['String']>;
	lastName?: InputMaybe<Scalars['String']>;
	phone?: InputMaybe<Scalars['String']>;
	status?: InputMaybe<UserStatusEnum>;
	userId: Scalars['String'];
};

export type AdminUser = Node & {
	__typename?: 'AdminUser';
	email: Scalars['String'];
	firstName?: Maybe<Scalars['String']>;
	fullName?: Maybe<Scalars['String']>;
	id: Scalars['ID'];
	isActive: Scalars['Boolean'];
	lastName?: Maybe<Scalars['String']>;
};

export type AdminVerifyForgotInput = {
	confirmPassword: Scalars['String'];
	password: Scalars['String'];
	token: Scalars['String'];
};

export type AppLoginInput = {
	deviceToken: Scalars['String'];
	email: Scalars['String'];
	password: Scalars['String'];
};

export type AppSignOutInput = {
	deviceToken?: InputMaybe<Scalars['String']>;
};

/** AuthConnection */
export type AuthConnection = {
	__typename?: 'AuthConnection';
	accessToken: Scalars['String'];
	expireRefreshTokenDate: Scalars['DateTime'];
	expireTokenDate: Scalars['DateTime'];
	refreshToken: Scalars['String'];
	user: UserEntity;
};

export type BanksEntity = Node & {
	__typename?: 'BanksEntity';
	code: Scalars['String'];
	id: Scalars['ID'];
	isActive: Scalars['Boolean'];
	logo: Scalars['String'];
	name: Scalars['String'];
};

export type BannerDetailInput = {
	id: Scalars['String'];
};

export type BannerEntity = Node & {
	__typename?: 'BannerEntity';
	bannerProfile?: Maybe<Scalars['String']>;
	bannerSearch?: Maybe<Scalars['String']>;
	id: Scalars['ID'];
	name: Scalars['String'];
};

/** List banner group */
export type BannerGroupConnection = Connection & {
	__typename?: 'BannerGroupConnection';
	items: Array<BannerGroupEntity>;
	links: PaginationLinks;
	meta: PaginationMeta;
};

export type BannerGroupEntity = Node & {
	__typename?: 'BannerGroupEntity';
	createdAt: Scalars['DateTime'];
	id: Scalars['ID'];
	isActive: Scalars['Boolean'];
	linkBanner?: Maybe<Scalars['String']>;
	mediaIds: Array<Scalars['String']>;
	medias?: Maybe<Array<Media>>;
	name: Scalars['String'];
	positionId: Scalars['String'];
	updatedAt: Scalars['DateTime'];
};

export type BannerPositionEntity = Node & {
	__typename?: 'BannerPositionEntity';
	createdAt: Scalars['DateTime'];
	id: Scalars['ID'];
	name: Scalars['String'];
	ratioHeight: Scalars['Float'];
	ratioWidth: Scalars['Float'];
	type: BannerPositionEnum;
	updatedAt: Scalars['DateTime'];
};

export enum BannerPositionEnum {
	HOME_TOP = 'HOME_TOP',
	POST_CAR = 'POST_CAR',
	PROFILE_BOTTOM = 'PROFILE_BOTTOM',
	SEARCH_TOP = 'SEARCH_TOP',
	SERVICE_TOP = 'SERVICE_TOP',
	SIMULATION_EXAM_TOP = 'SIMULATION_EXAM_TOP',
	WEBSITE_BODY = 'WEBSITE_BODY',
	WEBSITE_TOP = 'WEBSITE_TOP',
}

export type BannerPositionInput = {
	id: Scalars['String'];
};

export type CalculatingInstallmentCarLoanInput = {
	/** Loại xe cũ / mới */
	carType: CarTypeEnum;
	/** % Lãi xuất */
	interestRate: Scalars['Float'];
	/** Thời hạn vay */
	loanTime: Scalars['Float'];
	/** Hình thức chi trả */
	paymentForm: PaymentFormEnum;
	/** Giá trị xe trả trước % */
	prepaidCarAmountRate: Scalars['Float'];
	/** Giá trị xe theo phiên bản */
	priceCarVersion: Scalars['Float'];
	/** Nơi đăng ký */
	provinceId: Scalars['String'];
	/** Phiên bản */
	version?: InputMaybe<Scalars['String']>;
};

export type CarBodyTypeEntity = Node & {
	__typename?: 'CarBodyTypeEntity';
	createdAt: Scalars['DateTime'];
	id: Scalars['ID'];
	isActive: Scalars['Boolean'];
	name: Scalars['String'];
	slug: Scalars['String'];
};

export type CarBrandEntity = Node & {
	__typename?: 'CarBrandEntity';
	id: Scalars['ID'];
	image?: Maybe<Scalars['String']>;
	isActive: Scalars['Boolean'];
	isDisplayTopSearch: Scalars['Boolean'];
	mediaDetail?: Maybe<Media>;
	mediaId?: Maybe<Scalars['String']>;
	name: Scalars['String'];
	slug: Scalars['String'];
	totalPost?: Maybe<Scalars['Float']>;
};

export type CarBrandListInput = {
	brandSlug?: InputMaybe<Array<Scalars['String']>>;
	isDisplayTopSearch: Scalars['Boolean'];
	keyword?: InputMaybe<Scalars['String']>;
};

/** List car buying needs */
export type CarBuyingNeedConnection = Connection & {
	__typename?: 'CarBuyingNeedConnection';
	items: Array<CarBuyingNeedEntity>;
	links: PaginationLinks;
	meta: PaginationMeta;
};

export type CarBuyingNeedEntity = Node & {
	__typename?: 'CarBuyingNeedEntity';
	brand: Scalars['String'];
	brandDetail?: Maybe<CarBrandEntity>;
	budget?: Maybe<Scalars['String']>;
	buyerName?: Maybe<Scalars['String']>;
	carBuyingNeedStatusCares?: Maybe<Array<CarBuyingNeedStatusCareEntity>>;
	createdAt: Scalars['DateTime'];
	customerCreatedBySellerId?: Maybe<Scalars['String']>;
	descriptionOther?: Maybe<Scalars['String']>;
	id: Scalars['ID'];
	isCustomer: Scalars['Boolean'];
	isInstallmentPurchase: Scalars['Boolean'];
	isInsuranceConsultant: Scalars['Boolean'];
	isOther: Scalars['Boolean'];
	isVehicleInspectionService: Scalars['Boolean'];
	model: Scalars['String'];
	modelDetail?: Maybe<CarModelEntity>;
	numKilometerCarRun?: Maybe<Scalars['String']>;
	phone: Scalars['String'];
	provinceDetail?: Maybe<ProviceEntity>;
	provinceId?: Maybe<Scalars['String']>;
	status: StatusCarBuyingNeedEnum;
	statusBuyingDemand: StatusBuyingDemandEnum;
	updatedAt: Scalars['DateTime'];
	userDetail?: Maybe<UserEntity>;
	userId?: Maybe<Scalars['String']>;
	userSellerDetails?: Maybe<Array<UserEntity>>;
	userSellerIds?: Maybe<Array<Scalars['String']>>;
	vehicleLife?: Maybe<Scalars['String']>;
};

export type CarBuyingNeedStatusCareEntity = Node & {
	__typename?: 'CarBuyingNeedStatusCareEntity';
	carBuyingNeedId: Scalars['String'];
	createdAt: Scalars['DateTime'];
	id: Scalars['ID'];
	status: StatusCarBuyingNeedEnum;
	updatedAt: Scalars['DateTime'];
	userDetail?: Maybe<UserEntity>;
	userId: Scalars['String'];
	userSellerId: Scalars['String'];
};

export type CarColourEntity = Node & {
	__typename?: 'CarColourEntity';
	createdAt: Scalars['DateTime'];
	id: Scalars['ID'];
	isActive: Scalars['Boolean'];
	name: Scalars['String'];
	slug: Scalars['String'];
};

export enum CarConditionEnum {
	NEAR_NEW_AND_DEMO = 'NEAR_NEW_AND_DEMO',
	NEW = 'NEW',
	OLD = 'OLD',
	USED = 'USED',
}

export type CarDoorEntity = Node & {
	__typename?: 'CarDoorEntity';
	createdAt: Scalars['DateTime'];
	id: Scalars['ID'];
	isActive: Scalars['Boolean'];
	name: Scalars['String'];
	value: Scalars['Float'];
};

export type CarDriverTypeEntity = Node & {
	__typename?: 'CarDriverTypeEntity';
	createdAt: Scalars['DateTime'];
	id: Scalars['ID'];
	isActive: Scalars['Boolean'];
	nameEn: Scalars['String'];
	nameVi: Scalars['String'];
	slug: Scalars['String'];
};

export type CarFuelEconomyEntity = Node & {
	__typename?: 'CarFuelEconomyEntity';
	createdAt: Scalars['DateTime'];
	id: Scalars['ID'];
	isActive: Scalars['Boolean'];
	isLess: Scalars['Boolean'];
	kilometer: Scalars['Float'];
	liter: Scalars['Float'];
	nameEn: Scalars['String'];
	nameVi: Scalars['String'];
};

export type CarFuelTypeEntity = Node & {
	__typename?: 'CarFuelTypeEntity';
	createdAt: Scalars['DateTime'];
	id: Scalars['ID'];
	isActive: Scalars['Boolean'];
	name: Scalars['String'];
	slug: Scalars['String'];
};

export enum CarInspectionEnum {
	CERTIFIED = 'CERTIFIED',
	CHECK_WITH_SELLER = 'CHECK_WITH_SELLER',
	INSPECTED = 'INSPECTED',
	OTHERS = 'OTHERS',
}

export type CarModelEntity = Node & {
	__typename?: 'CarModelEntity';
	brand: Scalars['String'];
	brandMeta?: Maybe<CarBrandEntity>;
	id: Scalars['ID'];
	image?: Maybe<Scalars['String']>;
	isActive: Scalars['Boolean'];
	name: Scalars['String'];
	slug: Scalars['String'];
	totalPost?: Maybe<Scalars['Float']>;
};

export type CarModelListInput = {
	brand?: InputMaybe<Array<Scalars['String']>>;
	keyword?: InputMaybe<Scalars['String']>;
	modelSlug?: InputMaybe<Array<Scalars['String']>>;
};

export enum CarOfferEnum {
	AVAILBLE_WEEKDAYS = 'AVAILBLE_WEEKDAYS',
	AVAILBLE_WEEKKEND = 'AVAILBLE_WEEKKEND',
	EXPERIENCED_INSPECTOR = 'EXPERIENCED_INSPECTOR',
	FINANCIAL_AVAILBLE = 'FINANCIAL_AVAILBLE',
	INSURANCE_AVAILBLE = 'INSURANCE_AVAILBLE',
}

export type CarPurchaseCostEstimateMaster = {
	__typename?: 'CarPurchaseCostEstimateMaster';
	/** Bảo hiểm thân võ (1 năm) */
	bodyInsuranceOneYear: Scalars['Float'];
	/** Bảo hiểm dân sự */
	civilInsurance: Scalars['Float'];
	/** Lãi xuất (%) */
	interestRate: Scalars['Float'];
	/** Phí biển số */
	licensePlateFee: Scalars['Float'];
	/** Chi tiết dự toán */
	listCarPurchaseCostEstimaterDetails: Array<CarPurchaseCostEstimaterDetails>;
	/** Thời hạn vay */
	loanTime: Scalars['Float'];
	/** Giá trị xe trả trước % */
	prepaidCarAmountRate: Scalars['Float'];
	/** Giá xe theo phiên bản */
	priceCarVersion: Scalars['Float'];
	/** Sô tiền trả trước */
	pricePrepaidCar: Scalars['Float'];
	/** Phí trước bạ */
	registrationFee: Scalars['Float'];
	/** Phí đăng kiểm */
	registry: Scalars['Float'];
	/** Phí bảo trì đường bộ */
	roadMaintenanceFee: Scalars['Float'];
	/** Giá lăn bánh */
	rollingPrice: Scalars['Float'];
	/** Tổng tiền còn lại Gốc & Lãi */
	totalAmountRemainPrincipalAndInterest: Scalars['Float'];
	/** Chi tiết các loại phí */
	totalCost: Scalars['Float'];
	/** Tổng chi phí mua xe ước tính */
	totalEstimatedCarPurchaseCost: Scalars['Float'];
	/** Tổng tiền lãi */
	totalInterest: Scalars['Float'];
	/** Tổng tiền vay */
	totalLoanAmount: Scalars['Float'];
};

export type CarPurchaseCostEstimaterDetails = {
	__typename?: 'CarPurchaseCostEstimaterDetails';
	/** Trả lãi */
	interestAmount: Scalars['Float'];
	/** Trả gốc */
	principalAmount: Scalars['Float'];
	/** Dư nợ còn lại */
	remainAmount: Scalars['Float'];
	/** Đợt */
	session: Scalars['Float'];
	/** Tổng Gốc + Lãi */
	totalAmount: Scalars['Float'];
};

/** List Car Purchase Cost Province */
export type CarPurchaseCostProvinceConnection = Connection & {
	__typename?: 'CarPurchaseCostProvinceConnection';
	items: Array<CarPurchaseCostProvinceEntity>;
	links: PaginationLinks;
	meta: PaginationMeta;
};

export type CarPurchaseCostProvinceEntity = Node & {
	__typename?: 'CarPurchaseCostProvinceEntity';
	bodyInsuranceOneYear: Scalars['Float'];
	civilInsurance: Scalars['Float'];
	createdAt: Scalars['DateTime'];
	id: Scalars['ID'];
	isActive: Scalars['Boolean'];
	licensePlateFee: Scalars['Float'];
	otherCost: Scalars['Float'];
	proviceDetail?: Maybe<ProviceEntity>;
	provinceId: Scalars['String'];
	registrationFeeNewCar: Scalars['Float'];
	registrationFeeOldCar: Scalars['Float'];
	registry: Scalars['Float'];
	roadMaintenanceFee: Scalars['Float'];
	updatedAt: Scalars['DateTime'];
};

export enum CarRemoteAssessmentEnum {
	CHECK_WITH_SELLER = 'CHECK_WITH_SELLER',
	NO = 'NO',
	YES = 'YES',
}

export type CarSeatEntity = Node & {
	__typename?: 'CarSeatEntity';
	createdAt: Scalars['DateTime'];
	fixed: Scalars['Boolean'];
	id: Scalars['ID'];
	isActive: Scalars['Boolean'];
	name: Scalars['String'];
	value: Scalars['Float'];
};

export enum CarTransmissionEnum {
	AMT = 'AMT',
	AUTOMATIC = 'AUTOMATIC',
	MANUAL = 'MANUAL',
}

export enum CarTypeEnum {
	NEW = 'NEW',
	OLD = 'OLD',
}

/** List Car Version */
export type CarVersionConnection = Connection & {
	__typename?: 'CarVersionConnection';
	items: Array<CarVersionEntity>;
	links: PaginationLinks;
	meta: PaginationMeta;
};

export type CarVersionEntity = Node & {
	__typename?: 'CarVersionEntity';
	brand?: Maybe<Scalars['String']>;
	brandDetail?: Maybe<CarBrandEntity>;
	createdAt: Scalars['DateTime'];
	id: Scalars['ID'];
	image?: Maybe<Scalars['String']>;
	isActive: Scalars['Boolean'];
	mediaDetail?: Maybe<Media>;
	mediaId?: Maybe<Scalars['String']>;
	model: Scalars['String'];
	modelDetail?: Maybe<CarModelEntity>;
	name?: Maybe<Scalars['String']>;
	numKilometerCarRun?: Maybe<Scalars['String']>;
	priceCarVersion: Scalars['Float'];
	slug?: Maybe<Scalars['String']>;
	typeCarVersion: TypeCarVersionEnum;
	updatedAt: Scalars['DateTime'];
	yearManufacture?: Maybe<Scalars['String']>;
};

export type CarVersionListInput = {
	keyword?: InputMaybe<Scalars['String']>;
	model: Scalars['String'];
};

export type CarVersionMarketPrice = {
	__typename?: 'CarVersionMarketPrice';
	/** Giá trung bình */
	averagePrice: Scalars['Float'];
	/** Giá cao nhất */
	highestPrice: Scalars['Float'];
	/** Giá thấp nhất */
	lowestPrice: Scalars['Float'];
};

export type CarYearEntity = Node & {
	__typename?: 'CarYearEntity';
	id: Scalars['ID'];
	isActive: Scalars['Boolean'];
	name: Scalars['String'];
};

export type CategoryServicesEntity = Node & {
	__typename?: 'CategoryServicesEntity';
	createdAt: Scalars['DateTime'];
	id: Scalars['ID'];
	image: Scalars['String'];
	isActive: Scalars['Boolean'];
	isAvailable: Scalars['Boolean'];
	nameEn: Scalars['String'];
	nameVi: Scalars['String'];
	order: Scalars['Float'];
	slug: Scalars['String'];
	updatedAt: Scalars['DateTime'];
};

/** List center driver lisence */
export type CenterDriverLicenseConnection = Connection & {
	__typename?: 'CenterDriverLicenseConnection';
	items: Array<CenterDriverLicenseEntity>;
	links: PaginationLinks;
	meta: PaginationMeta;
};

export type CenterDriverLicenseEntity = Node & {
	__typename?: 'CenterDriverLicenseEntity';
	address?: Maybe<Scalars['String']>;
	averageRating: Scalars['Float'];
	createdAt: Scalars['DateTime'];
	description: Scalars['String'];
	district: Scalars['String'];
	districtDetail?: Maybe<DistrictsEntity>;
	email?: Maybe<Scalars['String']>;
	id: Scalars['ID'];
	isActive: Scalars['Boolean'];
	medias?: Maybe<Array<CenterDriverLicenseMediasEntity>>;
	phone?: Maybe<Scalars['String']>;
	province: Scalars['String'];
	provinceDetail?: Maybe<ProviceEntity>;
	slug: Scalars['String'];
	title: Scalars['String'];
	totalRating: Scalars['Float'];
	totalRatingScore: Scalars['Float'];
	updatedAt: Scalars['DateTime'];
	ward: Scalars['String'];
	wardDetail?: Maybe<WardsEntity>;
	website?: Maybe<Scalars['String']>;
};

export type CenterDriverLicenseMediasEntity = Node & {
	__typename?: 'CenterDriverLicenseMediasEntity';
	centerId: Scalars['String'];
	createdAt: Scalars['DateTime'];
	id: Scalars['ID'];
	mediaDetail?: Maybe<Media>;
	mediaId: Scalars['String'];
	updatedAt: Scalars['DateTime'];
};

/** List center driver lisence */
export type CenterDriverLicenseRatingConnection = Connection & {
	__typename?: 'CenterDriverLicenseRatingConnection';
	items: Array<CenterDriverLicenseRatingEntity>;
	links: PaginationLinks;
	meta: PaginationMeta;
};

export type CenterDriverLicenseRatingEntity = Node & {
	__typename?: 'CenterDriverLicenseRatingEntity';
	centerId: Scalars['String'];
	content?: Maybe<Scalars['String']>;
	createdAt: Scalars['DateTime'];
	id: Scalars['ID'];
	rating: Scalars['Float'];
	updatedAt: Scalars['DateTime'];
	user?: Maybe<UserEntity>;
	userId: Scalars['String'];
};

export type CheckEmailInput = {
	email: Scalars['String'];
};

export type CheckPhoneInput = {
	phone: Scalars['String'];
	prefixPhone?: InputMaybe<Scalars['String']>;
};

export type CheckReferralCodeInput = {
	referralCode: Scalars['String'];
};

export type CheckRoomInput = {
	userId: Scalars['String'];
};

/** List user */
export type CheckUserForgotPassword = {
	__typename?: 'CheckUserForgotPassword';
	type: ForgotPasswordTypeEnum;
};

export type CheckUserIdInput = {
	userId: Scalars['String'];
};

export type Connection = {
	links: PaginationLinks;
	meta: PaginationMeta;
};

/** count post by status */
export type CountPostByStatus = {
	__typename?: 'CountPostByStatus';
	count: Scalars['Float'];
	status: PostStatusEnum;
};

/** count post */
export type CountPostWithOptionsType = {
	__typename?: 'CountPostWithOptionsType';
	count: Scalars['Float'];
	type: PostMetaTypeEnum;
	value: Scalars['String'];
};

/** count post by status */
export type CountQuestionAndAnswer = {
	__typename?: 'CountQuestionAndAnswer';
	answer: Scalars['Float'];
	question: Scalars['Float'];
	type: QuestionTypeEnum;
};

/** count post by status */
export type CountQuestionAndAnswerSimulation = {
	__typename?: 'CountQuestionAndAnswerSimulation';
	question: Scalars['Float'];
	type: QuestionSimulationGroupTypeEnum;
};

/** List Countries */
export type CountriesConnection = Connection & {
	__typename?: 'CountriesConnection';
	items: Array<CountriesEntity>;
	links: PaginationLinks;
	meta: PaginationMeta;
};

export type CountriesEntity = Node & {
	__typename?: 'CountriesEntity';
	code: Scalars['String'];
	id: Scalars['ID'];
	name: Scalars['String'];
};

export type CreateCarBuyingNeedInput = {
	brand: Scalars['String'];
	budget?: InputMaybe<Scalars['String']>;
	buyerName?: InputMaybe<Scalars['String']>;
	descriptionOther?: InputMaybe<Scalars['String']>;
	isInstallmentPurchase: Scalars['Boolean'];
	isInsuranceConsultant: Scalars['Boolean'];
	isOther: Scalars['Boolean'];
	isVehicleInspectionService: Scalars['Boolean'];
	model: Scalars['String'];
	numKilometerCarRun?: InputMaybe<Scalars['String']>;
	phone: Scalars['String'];
	provinceId?: InputMaybe<Scalars['String']>;
	vehicleLife?: InputMaybe<Scalars['String']>;
};

export type CreateMediaWithPathInput = {
	path: Scalars['String'];
};

export type CreateRatingCenterDriverLisenseInput = {
	centerId: Scalars['String'];
	content?: InputMaybe<Scalars['String']>;
	rating: Scalars['Float'];
};

export type CreateRatingGarageInput = {
	content?: InputMaybe<Scalars['String']>;
	garageId: Scalars['String'];
	rating: Scalars['Float'];
};

export type CreateRatingInput = {
	content?: InputMaybe<Scalars['String']>;
	rating: Scalars['Float'];
	sellerStore: Scalars['String'];
};

export type CreateReviewInput = {
	category: Scalars['String'];
	contentEn?: InputMaybe<Scalars['String']>;
	contentVi?: InputMaybe<Scalars['String']>;
	descriptionEn?: InputMaybe<Scalars['String']>;
	descriptionVi?: InputMaybe<Scalars['String']>;
	mediaIds: Array<Scalars['String']>;
	nameEn?: InputMaybe<Scalars['String']>;
	nameVi?: InputMaybe<Scalars['String']>;
};

export type CreateRoomInput = {
	image?: InputMaybe<Scalars['String']>;
	roomName?: InputMaybe<Scalars['String']>;
	roomType: RoomTypeEnum;
	userIds: Array<Scalars['String']>;
};

export enum DayEnum {
	FRIDAY = 'FRIDAY',
	MONDAY = 'MONDAY',
	SATURDAY = 'SATURDAY',
	SUNDAY = 'SUNDAY',
	THURSDAY = 'THURSDAY',
	TUESDAY = 'TUESDAY',
	WEDNESDAY = 'WEDNESDAY',
}

export type DetailCommonInput = {
	id: Scalars['String'];
};

export type DetailInput = {
	id: Scalars['String'];
};

export type DetailRating = {
	id: Scalars['String'];
};

/** List Province */
export type DistrictsConnection = Connection & {
	__typename?: 'DistrictsConnection';
	items: Array<DistrictsEntity>;
	links: PaginationLinks;
	meta: PaginationMeta;
};

export type DistrictsEntity = Node & {
	__typename?: 'DistrictsEntity';
	id: Scalars['ID'];
	isActive: Scalars['Boolean'];
	name: Scalars['String'];
	prefix: Scalars['String'];
	provinceCode: Scalars['Float'];
};

export type DistrictsPagingInput = {
	keyword?: InputMaybe<Scalars['String']>;
	provineCode: Scalars['String'];
	skip?: InputMaybe<Scalars['Float']>;
	take?: InputMaybe<Scalars['Float']>;
};

export type EditCarBuyingNeedInput = {
	brand: Scalars['String'];
	budget?: InputMaybe<Scalars['String']>;
	buyerName?: InputMaybe<Scalars['String']>;
	descriptionOther?: InputMaybe<Scalars['String']>;
	id: Scalars['String'];
	isInstallmentPurchase: Scalars['Boolean'];
	isInsuranceConsultant: Scalars['Boolean'];
	isOther: Scalars['Boolean'];
	isVehicleInspectionService: Scalars['Boolean'];
	model: Scalars['String'];
	numKilometerCarRun?: InputMaybe<Scalars['String']>;
	phone: Scalars['String'];
	provinceId?: InputMaybe<Scalars['String']>;
	statusBuyingDemand?: InputMaybe<StatusBuyingDemandEnum>;
	vehicleLife?: InputMaybe<Scalars['String']>;
};

export type EditCenterDriverLisenseInput = {
	address: Scalars['String'];
	city?: InputMaybe<Scalars['String']>;
	description: Scalars['String'];
	district: Scalars['String'];
	email?: InputMaybe<Scalars['String']>;
	id: Scalars['String'];
	medias: Array<Scalars['String']>;
	phone?: InputMaybe<Scalars['String']>;
	province: Scalars['String'];
	title: Scalars['String'];
	ward: Scalars['String'];
	website?: InputMaybe<Scalars['String']>;
};

export type EditGarageInput = {
	address: Scalars['String'];
	city?: InputMaybe<Scalars['String']>;
	description: Scalars['String'];
	district?: InputMaybe<Scalars['String']>;
	email?: InputMaybe<Scalars['String']>;
	id: Scalars['String'];
	latitude: Scalars['Float'];
	longitude: Scalars['Float'];
	medias: Array<Scalars['String']>;
	phone: Scalars['String'];
	province?: InputMaybe<Scalars['String']>;
	services: Array<GarageServicesTypeEnum>;
	title: Scalars['String'];
	ward?: InputMaybe<Scalars['String']>;
	website?: InputMaybe<Scalars['String']>;
};

export type EditParkingInput = {
	address: Scalars['String'];
	closeOnPublicHolidays: Scalars['Boolean'];
	description: Scalars['String'];
	email?: InputMaybe<Scalars['String']>;
	id: Scalars['String'];
	latitude: Scalars['Float'];
	longitude: Scalars['Float'];
	medias: Array<Scalars['String']>;
	phone: Scalars['String'];
	priceProperties: Array<NewParkingWokingPricePropertiesInput>;
	sameWeekOfOperation: Scalars['Boolean'];
	title: Scalars['String'];
	total: Scalars['Float'];
	website?: InputMaybe<Scalars['String']>;
	workingTimes?: InputMaybe<Array<NewParkingWokingTimeInput>>;
};

export type EditPostInput = {
	descriptionMeta: NewPostDescriptionInput;
	engine?: InputMaybe<NewPostEngineInput>;
	id: Scalars['String'];
	medias?: InputMaybe<Array<Scalars['String']>>;
	mediasHidePlate?: InputMaybe<Array<Scalars['String']>>;
	meta: NewPostMetaInput;
	plan: NewPostPlanInput;
	plateHidden?: InputMaybe<Scalars['Boolean']>;
	publishType: NewPostPublishTypeInput;
	styleMeta?: InputMaybe<NewPostStyleInput>;
	title?: InputMaybe<Scalars['String']>;
	videoUrl?: InputMaybe<Scalars['String']>;
};

export type EditReviewInput = {
	category: Scalars['String'];
	contentEn?: InputMaybe<Scalars['String']>;
	contentVi?: InputMaybe<Scalars['String']>;
	descriptionEn?: InputMaybe<Scalars['String']>;
	descriptionVi?: InputMaybe<Scalars['String']>;
	id: Scalars['String'];
	mediaIds: Array<Scalars['String']>;
	nameEn?: InputMaybe<Scalars['String']>;
	nameVi?: InputMaybe<Scalars['String']>;
};

export type EditStatusBuyingDemandInput = {
	id: Scalars['String'];
	statusBuyingDemand?: InputMaybe<StatusBuyingDemandEnum>;
};

export type EditStatusCarBuyingNeedEnumInput = {
	carBuyingNeedId: Scalars['String'];
	status?: InputMaybe<StatusCarBuyingNeedEnum>;
	userId: Scalars['String'];
	userSellerId?: InputMaybe<Scalars['String']>;
};

export enum ForgotPasswordTypeEnum {
	EMAIL = 'EMAIL',
	PHONE = 'PHONE',
}

/** List garage center */
export type GarageConnection = Connection & {
	__typename?: 'GarageConnection';
	items: Array<GarageEntity>;
	links: PaginationLinks;
	meta: PaginationMeta;
};

export type GarageEntity = Node & {
	__typename?: 'GarageEntity';
	address?: Maybe<Scalars['String']>;
	averageRating: Scalars['Float'];
	createdAt: Scalars['DateTime'];
	description: Scalars['String'];
	distance?: Maybe<Scalars['Float']>;
	district?: Maybe<Scalars['String']>;
	districtDetail?: Maybe<DistrictsEntity>;
	email?: Maybe<Scalars['String']>;
	id: Scalars['ID'];
	isActive: Scalars['Boolean'];
	latitude?: Maybe<Scalars['Float']>;
	location?: Maybe<Scalars['GeoJSONPoint']>;
	longitude?: Maybe<Scalars['Float']>;
	mediaIds: Array<Scalars['String']>;
	medias?: Maybe<Array<GarageMediasEntity>>;
	phone: Scalars['String'];
	province?: Maybe<Scalars['String']>;
	provinceDetail?: Maybe<ProviceEntity>;
	reason?: Maybe<Scalars['String']>;
	services: Array<GarageServicesTypeEnum>;
	slug: Scalars['String'];
	status: StatusCommonEnum;
	title: Scalars['String'];
	totalRating: Scalars['Float'];
	totalRatingScore: Scalars['Float'];
	updatedAt: Scalars['DateTime'];
	user?: Maybe<UserEntity>;
	userId?: Maybe<Scalars['String']>;
	ward?: Maybe<Scalars['String']>;
	wardDetail?: Maybe<WardsEntity>;
	website?: Maybe<Scalars['String']>;
};

export enum GarageListSortTypeEnum {
	LATEST = 'LATEST',
	NEAREST = 'NEAREST',
	RATING_ASC = 'RATING_ASC',
	RATING_DESC = 'RATING_DESC',
}

export type GarageMediasEntity = Node & {
	__typename?: 'GarageMediasEntity';
	createdAt: Scalars['DateTime'];
	garageId: Scalars['String'];
	id: Scalars['ID'];
	mediaDetail?: Maybe<Media>;
	mediaId: Scalars['String'];
	updatedAt: Scalars['DateTime'];
};

/** List garage rating */
export type GarageRatingConnection = Connection & {
	__typename?: 'GarageRatingConnection';
	items: Array<GarageRatingEntity>;
	links: PaginationLinks;
	meta: PaginationMeta;
};

export type GarageRatingEntity = Node & {
	__typename?: 'GarageRatingEntity';
	content?: Maybe<Scalars['String']>;
	createdAt: Scalars['DateTime'];
	garageId: Scalars['String'];
	id: Scalars['ID'];
	rating: Scalars['Float'];
	updatedAt: Scalars['DateTime'];
	user?: Maybe<UserEntity>;
	userId: Scalars['String'];
};

export enum GarageServicesTypeEnum {
	CAR_CONSULTATION = 'CAR_CONSULTATION',
	CAR_INSPECTION = 'CAR_INSPECTION',
	DETAILINGS = 'DETAILINGS',
	MAINTENANCE_WARRANTY = 'MAINTENANCE_WARRANTY',
	REPAIR = 'REPAIR',
	SPARE_PARTS = 'SPARE_PARTS',
	TOWING = 'TOWING',
	TYRE_REPLACEMENT = 'TYRE_REPLACEMENT',
	WASHING = 'WASHING',
}

export type GetCountPostByTypeInput = {
	type: PostMetaTypeEnum;
	value: Scalars['String'];
};

export type GetMessagesInput = {
	limit?: InputMaybe<Scalars['Float']>;
	page?: InputMaybe<Scalars['Float']>;
	roomId: Scalars['String'];
};

export type GetRoomInput = {
	keyword?: InputMaybe<Scalars['String']>;
	limit?: InputMaybe<Scalars['Float']>;
	page?: InputMaybe<Scalars['Float']>;
};

export enum LanguageEnum {
	EN = 'EN',
	VI = 'VI',
}

export type LikeInput = {
	postId: Scalars['String'];
};

export type ListCenterDriverLisenseInput = {
	createFrom?: InputMaybe<Scalars['String']>;
	createTo?: InputMaybe<Scalars['String']>;
	district?: InputMaybe<Scalars['String']>;
	keyword?: InputMaybe<Scalars['String']>;
	province?: InputMaybe<Scalars['String']>;
	rating?: InputMaybe<SortTypeEnum>;
	skip?: InputMaybe<Scalars['Float']>;
	take?: InputMaybe<Scalars['Float']>;
	ward?: InputMaybe<Scalars['String']>;
};

export type ListCenterDriverLisenseRatingInput = {
	centerId: Scalars['String'];
	skip?: InputMaybe<Scalars['Float']>;
	take?: InputMaybe<Scalars['Float']>;
};

export type ListGarageInput = {
	createFrom?: InputMaybe<Scalars['String']>;
	createTo?: InputMaybe<Scalars['String']>;
	district?: InputMaybe<Scalars['String']>;
	keyword?: InputMaybe<Scalars['String']>;
	location?: InputMaybe<ListGarageLocationInput>;
	province?: InputMaybe<Scalars['String']>;
	services?: InputMaybe<Array<GarageServicesTypeEnum>>;
	skip?: InputMaybe<Scalars['Float']>;
	sort: GarageListSortTypeEnum;
	take?: InputMaybe<Scalars['Float']>;
	ward?: InputMaybe<Scalars['String']>;
};

export type ListGarageLocationInput = {
	distance?: InputMaybe<Scalars['Float']>;
	latitude: Scalars['Float'];
	longitude: Scalars['Float'];
};

export type ListGarageRatingInput = {
	garageId: Scalars['String'];
	skip?: InputMaybe<Scalars['Float']>;
	take?: InputMaybe<Scalars['Float']>;
};

export type ListNotificationInput = {
	skip?: InputMaybe<Scalars['Float']>;
	take?: InputMaybe<Scalars['Float']>;
};

export type ListParkingInput = {
	createFrom?: InputMaybe<Scalars['String']>;
	createTo?: InputMaybe<Scalars['String']>;
	keyword?: InputMaybe<Scalars['String']>;
	location?: InputMaybe<ListGarageLocationInput>;
	skip?: InputMaybe<Scalars['Float']>;
	sort?: InputMaybe<GarageListSortTypeEnum>;
	take?: InputMaybe<Scalars['Float']>;
};

export type ListPostInput = {
	keyword?: InputMaybe<Scalars['String']>;
	options?: InputMaybe<ListPostOptionsInput>;
	skip?: InputMaybe<Scalars['Float']>;
	take?: InputMaybe<Scalars['Float']>;
	userId?: InputMaybe<Scalars['String']>;
};

export type ListPostOptionsInput = {
	bodyType?: InputMaybe<Array<Scalars['String']>>;
	brand?: InputMaybe<Array<Scalars['String']>>;
	certified?: InputMaybe<Array<CarInspectionEnum>>;
	cityId?: InputMaybe<Scalars['String']>;
	colour?: InputMaybe<Array<Scalars['String']>>;
	condition?: InputMaybe<Array<CarConditionEnum>>;
	countryCode?: InputMaybe<Scalars['String']>;
	currency?: InputMaybe<PaymentItemCurrencyEnum>;
	doors?: InputMaybe<Array<Scalars['String']>>;
	driverType?: InputMaybe<Array<Scalars['String']>>;
	fuelType?: InputMaybe<Array<Scalars['String']>>;
	fuleEconomy?: InputMaybe<Array<Scalars['String']>>;
	inspected?: InputMaybe<Array<CarInspectionEnum>>;
	model?: InputMaybe<Array<Scalars['String']>>;
	odometerMax?: InputMaybe<Scalars['Float']>;
	odometerMin?: InputMaybe<Scalars['Float']>;
	priceMax?: InputMaybe<Scalars['Float']>;
	priceMin?: InputMaybe<Scalars['Float']>;
	seats?: InputMaybe<Array<Scalars['String']>>;
	sort?: InputMaybe<PostSortType>;
	transmission?: InputMaybe<Array<CarTransmissionEnum>>;
	yearMax?: InputMaybe<Scalars['String']>;
	yearMin?: InputMaybe<Scalars['String']>;
};

export type ListPostSavedInput = {
	keyword?: InputMaybe<Scalars['String']>;
	skip?: InputMaybe<Scalars['Float']>;
	take?: InputMaybe<Scalars['Float']>;
};

export type ListQuestionSimulationGroupInput = {
	keyword?: InputMaybe<Scalars['String']>;
	skip?: InputMaybe<Scalars['Float']>;
	take?: InputMaybe<Scalars['Float']>;
};

export type LogoutUserInput = {
	deviceToken: Scalars['String'];
};

export type MarketPriceCarVersionInput = {
	brand: Scalars['String'];
	model: Scalars['String'];
};

export type Media = Node & {
	__typename?: 'Media';
	createdAt: Scalars['DateTime'];
	deletedAt?: Maybe<Scalars['DateTime']>;
	fileName?: Maybe<Scalars['String']>;
	filePathLG?: Maybe<Scalars['String']>;
	filePathOriginal?: Maybe<Scalars['String']>;
	filePathSM?: Maybe<Scalars['String']>;
	id: Scalars['ID'];
	isDeleted: Scalars['Boolean'];
	mimeType?: Maybe<Scalars['String']>;
	updatedAt: Scalars['DateTime'];
	uploadBy?: Maybe<Scalars['String']>;
};

export type Message = Node & {
	__typename?: 'Message';
	content?: Maybe<Scalars['String']>;
	createdAt: Scalars['String'];
	id: Scalars['ID'];
	isDelete: Scalars['Boolean'];
	media?: Maybe<Array<MessageMediaDetail>>;
	mediaId?: Maybe<Scalars['String']>;
	messageType: MessageTypeEnum;
	parent?: Maybe<Message>;
	parentId?: Maybe<Scalars['String']>;
	post?: Maybe<PostEntity>;
	postId?: Maybe<Scalars['String']>;
	roomId: Scalars['String'];
	updatedAt: Scalars['String'];
	user?: Maybe<UserEntity>;
	userId: Scalars['String'];
};

export type MessageConnection = {
	__typename?: 'MessageConnection';
	items: Array<Message>;
	links: PaginationLinks;
	meta: PaginationMeta;
};

export type MessageMediaDetail = Node & {
	__typename?: 'MessageMediaDetail';
	filePathLG?: Maybe<Scalars['String']>;
	filePathOriginal: Scalars['String'];
	filePathSM?: Maybe<Scalars['String']>;
	id: Scalars['ID'];
	imageName: Scalars['String'];
	mediaId: Scalars['String'];
	messageType: MessageTypeEnum;
};

export type MessageSeen = Node & {
	__typename?: 'MessageSeen';
	createdAt: Scalars['String'];
	id: Scalars['ID'];
	isSeen: Scalars['Boolean'];
	messageId?: Maybe<Scalars['String']>;
	roomId: Scalars['String'];
	seenAt?: Maybe<Scalars['String']>;
	updatedAt: Scalars['String'];
	userId: Scalars['String'];
};

export enum MessageTypeEnum {
	FILE = 'FILE',
	IMAGE = 'IMAGE',
	LOCATION = 'LOCATION',
	POST = 'POST',
	TEXT = 'TEXT',
	VIDEO = 'VIDEO',
}

export type Mutation = {
	__typename?: 'Mutation';
	activeEmail: UserEntity;
	/** add customer car buying needs */
	addCustomerCarBuyingNeed?: Maybe<CarBuyingNeedEntity>;
	/** admin approve post */
	adminApprovePost?: Maybe<PostEntity>;
	/** Get list Reviews for admin */
	adminChangeStatusReview?: Maybe<ReviewsEntity>;
	/** create banner for admin */
	adminCreateBanner?: Maybe<BannerGroupEntity>;
	/** Admin Create body type */
	adminCreateBodyType?: Maybe<CarBodyTypeEntity>;
	/** Admin Create Brand */
	adminCreateBrand?: Maybe<CarBrandEntity>;
	/** admin create car buying need */
	adminCreateCarBuyingNeed?: Maybe<CarBuyingNeedEntity>;
	/** Create car purchase cost province */
	adminCreateCarPurchaseCostProvince?: Maybe<CarPurchaseCostProvinceEntity>;
	/** Create car purchase cost province setting option */
	adminCreateCarPurchaseCostProvinceSettingOption?: Maybe<CarPurchaseCostProvinceEntity>;
	/** Admin Create Colous */
	adminCreateColous?: Maybe<CarColourEntity>;
	/** Admin Create door */
	adminCreateDoors?: Maybe<CarDoorEntity>;
	/** Admin Create driver type */
	adminCreateDriverType?: Maybe<CarDriverTypeEntity>;
	/** Admin Create fule economy */
	adminCreateFuelEconomy?: Maybe<CarFuelEconomyEntity>;
	/** Admin Create door */
	adminCreateFuelType?: Maybe<CarFuelTypeEntity>;
	/** create post */
	adminCreateGarage?: Maybe<GarageEntity>;
	/** Admin Create Model */
	adminCreateModel?: Maybe<CarModelEntity>;
	/** Admin Create multi Version */
	adminCreateMultiVersion?: Maybe<Array<CarVersionEntity>>;
	/** create post */
	adminCreateParking?: Maybe<ParkingEntity>;
	/** Admin Create PaymentItems */
	adminCreatePaymentItems?: Maybe<PaymentItemEntity>;
	/** admin create post */
	adminCreatePost?: Maybe<PostEntity>;
	adminCreateQuestion?: Maybe<Scalars['Boolean']>;
	adminCreateQuestionGroup?: Maybe<Scalars['Boolean']>;
	adminCreateQuestionSimulation?: Maybe<QuestionSimulationEntity>;
	adminCreateQuestionSimulationGroup?: Maybe<QuestionSimulationGroupEntity>;
	/** Admin Create seats */
	adminCreateSeats?: Maybe<CarSeatEntity>;
	/** Admin Create Version */
	adminCreateVersion?: Maybe<CarVersionEntity>;
	/** Admin Create Year */
	adminCreateYear?: Maybe<CarYearEntity>;
	/** get list banner position */
	adminDeleteBanner?: Maybe<Scalars['Boolean']>;
	/** admin delete car buying need */
	adminDeleteCarBuyingNeed?: Maybe<Scalars['Boolean']>;
	/** delete car purchase cost province */
	adminDeleteCarPurchaseCostProvince?: Maybe<Scalars['Boolean']>;
	/** create post */
	adminDeleteGarage?: Maybe<Scalars['Boolean']>;
	/** Admin Update Status Options */
	adminDeleteOptions?: Maybe<Scalars['Boolean']>;
	/** create post */
	adminDeleteParking?: Maybe<Scalars['Boolean']>;
	/** admin delete post */
	adminDeletePost?: Maybe<PostEntity>;
	adminDeleteQuestion?: Maybe<Scalars['Boolean']>;
	/** admin delete question simulation */
	adminDeleteQuestionSimulation?: Maybe<Scalars['Boolean']>;
	/** admin Delete Question Simulation Group */
	adminDeleteQuestionSimulationGroup?: Maybe<Scalars['Boolean']>;
	/** Get review detail */
	adminDeleteReview?: Maybe<Scalars['Boolean']>;
	/** Admin Update Status Top Search Brand */
	adminDeleteVersion?: Maybe<Scalars['Boolean']>;
	/** create banner for admin */
	adminEditBanner?: Maybe<BannerGroupEntity>;
	/** Admin Edit body type */
	adminEditBodyType?: Maybe<CarBodyTypeEntity>;
	/** Admin Edit Brand */
	adminEditBrand?: Maybe<CarBrandEntity>;
	/** admin edit car buying need */
	adminEditCarBuyingNeed?: Maybe<CarBuyingNeedEntity>;
	/** Create car purchase cost province */
	adminEditCarPurchaseCostProvince?: Maybe<CarPurchaseCostProvinceEntity>;
	/** Create car purchase cost province setting option */
	adminEditCarPurchaseCostProvinceSettingOption?: Maybe<CarPurchaseCostProvinceEntity>;
	/** Admin Edit Colous */
	adminEditColous?: Maybe<CarColourEntity>;
	/** Admin Edit door */
	adminEditDoors?: Maybe<CarDoorEntity>;
	/** Admin Edit driver type */
	adminEditDriverType?: Maybe<CarDriverTypeEntity>;
	/** Admin Edit fule economy */
	adminEditFuelEconomy?: Maybe<CarFuelEconomyEntity>;
	/** Admin Edit door */
	adminEditFuelType?: Maybe<CarFuelTypeEntity>;
	/** create post */
	adminEditGarage?: Maybe<GarageEntity>;
	/** Admin Edit Model */
	adminEditModel?: Maybe<CarModelEntity>;
	/** Admin Edit multi Version */
	adminEditMultiVersion?: Maybe<Array<CarVersionEntity>>;
	/** create post */
	adminEditParking?: Maybe<ParkingEntity>;
	/** Admin Edit PaymentItems */
	adminEditPaymentItems?: Maybe<PaymentItemEntity>;
	/** admin edit post */
	adminEditPost?: Maybe<PostEntity>;
	adminEditQuestion?: Maybe<Scalars['Boolean']>;
	adminEditQuestionGroup?: Maybe<Scalars['Boolean']>;
	adminEditQuestionSimulation?: Maybe<QuestionSimulationEntity>;
	adminEditQuestionSimulationGroup?: Maybe<QuestionSimulationGroupEntity>;
	/** Admin Edit seats */
	adminEditSeats?: Maybe<CarSeatEntity>;
	/** Admin Edit Version */
	adminEditVersion?: Maybe<CarVersionEntity>;
	adminForgotPassword: Scalars['Boolean'];
	adminLogin: AdminAuthConnection;
	/** create post */
	adminRejectPostActive?: Maybe<PostEntity>;
	/** admin send notification to user */
	adminSendEmail?: Maybe<Scalars['Boolean']>;
	adminSendNotification: Scalars['Boolean'];
	/** admin add balance */
	adminUpdateBalance: UserBalanceEntity;
	/** create banner */
	adminUpdateStatusBanner?: Maybe<BannerGroupEntity>;
	/** create post */
	adminUpdateStatusGarage?: Maybe<GarageEntity>;
	/** Admin Update Status Options */
	adminUpdateStatusOptions?: Maybe<Scalars['Boolean']>;
	/** create post */
	adminUpdateStatusParking?: Maybe<ParkingEntity>;
	/** Get list payment item */
	adminUpdateStatusPayment?: Maybe<PaymentItemEntity>;
	/** Get list plan listing */
	adminUpdateStatusPlan?: Maybe<PlanEntity>;
	/** admin approve post */
	adminUpdateStatusPost?: Maybe<PostEntity>;
	/** Admin Update Status Top Search Brand */
	adminUpdateStatusTopSearchBrand?: Maybe<Scalars['Boolean']>;
	adminUpdateUser: UserEntity;
	adminUpdateUserAvatar: UserEntity;
	/** admin approve post */
	adminUpdateUserTransferRequest?: Maybe<Scalars['Boolean']>;
	adminVerifyForgot: Scalars['Boolean'];
	changePassword: Scalars['Boolean'];
	/** Check email exist */
	checkEmailExist: Scalars['Boolean'];
	/** Check phone exist */
	checkPhoneExist: Scalars['Boolean'];
	/** Check Referral Code exist */
	checkReferralCodeExist: Scalars['Boolean'];
	checkRoom?: Maybe<Room>;
	checkUserId: Scalars['Boolean'];
	createAdmin: AdminUser;
	/** Create car buying needs */
	createCarBuyingNeed?: Maybe<CarBuyingNeedEntity>;
	/** create post */
	createCenterDriverLisense?: Maybe<CenterDriverLicenseEntity>;
	/** Create customer car buying needs */
	createCustomerCarBuyingNeed?: Maybe<CarBuyingNeedEntity>;
	/** create post */
	createGarage?: Maybe<GarageEntity>;
	/** user create logs common */
	createLogsCommon?: Maybe<Scalars['Boolean']>;
	createMediaWithPath: Media;
	/** create post */
	createParking?: Maybe<ParkingEntity>;
	/** create post */
	createPost?: Maybe<PostEntity>;
	/** Create rating */
	createRating?: Maybe<Scalars['Boolean']>;
	/** create post */
	createRatingCenterDriverLisense?: Maybe<Scalars['Boolean']>;
	/** create post */
	createRatingGarage?: Maybe<Scalars['Boolean']>;
	/** Create Reviews */
	createReview?: Maybe<ReviewsEntity>;
	createRoom: Room;
	/** delete car buying needs */
	deleteCarBuyingNeed?: Maybe<Scalars['Boolean']>;
	/** create post */
	deleteCenterDriverLisense?: Maybe<Scalars['Boolean']>;
	/** delete customer car buying needs */
	deleteCustomerCarBuyingNeed?: Maybe<Scalars['Boolean']>;
	/** create post */
	deleteGarage?: Maybe<Scalars['Boolean']>;
	/** create post */
	deleteParking?: Maybe<Scalars['Boolean']>;
	/** Edit car buying needs */
	editCarBuyingNeed?: Maybe<CarBuyingNeedEntity>;
	/** create post */
	editCenterDriverLisense?: Maybe<CenterDriverLicenseEntity>;
	/** Edit customer car buying needs */
	editCustomerCarBuyingNeed?: Maybe<CarBuyingNeedEntity>;
	/** create post */
	editGarage?: Maybe<GarageEntity>;
	/** create post */
	editParking?: Maybe<ParkingEntity>;
	/** create post */
	editPost?: Maybe<PostEntity>;
	/** Create Reviews */
	editReview?: Maybe<ReviewsEntity>;
	forgotPassword: CheckUserForgotPassword;
	getUserBalance: UserBalanceEntity;
	/** like post */
	likePost?: Maybe<Scalars['Boolean']>;
	login: AuthConnection;
	loginSNS: AuthConnection;
	logout: Scalars['Boolean'];
	refreshToken: AuthConnection;
	/** Register user for app */
	register: UserEntity;
	/** create post report */
	reportPost?: Maybe<PostReportEntity>;
	/** create post report */
	reportUser?: Maybe<UserReportEntity>;
	requestBankTransfer: UserRequestBankTransferEntity;
	seenMessages: Scalars['Boolean'];
	sendMessage: Message;
	sendOTP: Scalars['Boolean'];
	sendOtpActiveEmail: Scalars['Boolean'];
	signOut: Scalars['Boolean'];
	test: Scalars['String'];
	/** like post */
	testSlug?: Maybe<Scalars['Boolean']>;
	testUser: Scalars['Boolean'];
	updateNotification: UserEntity;
	/** update Status Buying Demand */
	updateStatusBuyingDemand?: Maybe<CarBuyingNeedEntity>;
	/** update Status Car Buying Need */
	updateStatusCarBuyingNeed?: Maybe<CarBuyingNeedEntity>;
	updateStoreName: UserEntity;
	updateUser: UserEntity;
	updateUserAvatar: UserEntity;
	userBlockPost: Scalars['Boolean'];
	userBlockUser: Scalars['Boolean'];
	userDeleteAllNotification: Scalars['Boolean'];
	userDeleteNotification: Scalars['Boolean'];
	userReadAllNotification: Scalars['Boolean'];
	userReadNotification: Scalars['Boolean'];
	userSubmitAnswerHaySai?: Maybe<Scalars['Boolean']>;
	userSubmitGroupAnswer?: Maybe<Scalars['Boolean']>;
	userSubmitGroupAnswerSimulation?: Maybe<Scalars['Boolean']>;
	userSubmitGroupAnswerSimulationOneRow?: Maybe<Scalars['Boolean']>;
	userUpdateLanguage: Scalars['Boolean'];
	userWithdrawAccount: Scalars['Boolean'];
	verifyActivePhone: UserEntity;
	verifyForgotPasswordEmail: Scalars['Boolean'];
	verifyForgotPasswordPhone: Scalars['Boolean'];
	verifyOTP: Scalars['Boolean'];
};

export type MutationactiveEmailArgs = {
	input: UserConfirmActiveEmailInput;
};

export type MutationaddCustomerCarBuyingNeedArgs = {
	id: Scalars['String'];
};

export type MutationadminApprovePostArgs = {
	input: AdminUpdateStatusInput;
};

export type MutationadminChangeStatusReviewArgs = {
	input: AdminChangeStatusReviewInput;
};

export type MutationadminCreateBannerArgs = {
	input: AdminCreateBannerInput;
};

export type MutationadminCreateBodyTypeArgs = {
	input: AdminCreateBrandInput;
};

export type MutationadminCreateBrandArgs = {
	input: AdminCreateBrandNewInput;
};

export type MutationadminCreateCarBuyingNeedArgs = {
	input: AdminCreateCarBuyingNeedInput;
};

export type MutationadminCreateCarPurchaseCostProvinceArgs = {
	input: AdminCreateCarPurchaseCostProvinceInput;
};

export type MutationadminCreateCarPurchaseCostProvinceSettingOptionArgs = {
	input: AdminCreateCarPurchaseCostProvinceInput;
};

export type MutationadminCreateColousArgs = {
	input: AdminCreateBrandInput;
};

export type MutationadminCreateDoorsArgs = {
	input: AdminCreateSeatInput;
};

export type MutationadminCreateDriverTypeArgs = {
	input: AdminCreateDriverType;
};

export type MutationadminCreateFuelEconomyArgs = {
	input: AdminCreateFuelEconomy;
};

export type MutationadminCreateFuelTypeArgs = {
	input: AdminCreateBrandInput;
};

export type MutationadminCreateGarageArgs = {
	input: AdminNewGarageInput;
};

export type MutationadminCreateModelArgs = {
	input: AdminCreateModelnput;
};

export type MutationadminCreateMultiVersionArgs = {
	input: AdminCreateMultiVersionInput;
};

export type MutationadminCreateParkingArgs = {
	input: AdminNewParkingInput;
};

export type MutationadminCreatePaymentItemsArgs = {
	input: AdminCreatePaymentItemInput;
};

export type MutationadminCreatePostArgs = {
	input: AdminNewPostInput;
};

export type MutationadminCreateQuestionArgs = {
	input: AdminCreateQuestionInput;
};

export type MutationadminCreateQuestionGroupArgs = {
	input: AdminCreateQuestionGroupInput;
};

export type MutationadminCreateQuestionSimulationArgs = {
	input: AdminCreateQuestionSimulationInput;
};

export type MutationadminCreateQuestionSimulationGroupArgs = {
	input: AdminCreateQuestionSimulationGroupInput;
};

export type MutationadminCreateSeatsArgs = {
	input: AdminCreateSeatInput;
};

export type MutationadminCreateVersionArgs = {
	input: AdminCreateVersionInput;
};

export type MutationadminCreateYearArgs = {
	input: AdminCreateBrandInput;
};

export type MutationadminDeleteBannerArgs = {
	input: BannerDetailInput;
};

export type MutationadminDeleteCarBuyingNeedArgs = {
	id: Scalars['String'];
};

export type MutationadminDeleteCarPurchaseCostProvinceArgs = {
	id: Scalars['String'];
};

export type MutationadminDeleteGarageArgs = {
	input: DetailInput;
};

export type MutationadminDeleteOptionsArgs = {
	input: AdminDeleteOptionsInput;
};

export type MutationadminDeleteParkingArgs = {
	input: DetailInput;
};

export type MutationadminDeletePostArgs = {
	id: Scalars['String'];
};

export type MutationadminDeleteQuestionArgs = {
	input: DetailInput;
};

export type MutationadminDeleteQuestionSimulationArgs = {
	id: Scalars['String'];
};

export type MutationadminDeleteQuestionSimulationGroupArgs = {
	id: Scalars['String'];
};

export type MutationadminDeleteReviewArgs = {
	id: Scalars['String'];
};

export type MutationadminDeleteVersionArgs = {
	id: Scalars['String'];
};

export type MutationadminEditBannerArgs = {
	input: AdminEditBannerInput;
};

export type MutationadminEditBodyTypeArgs = {
	input: AdminEditBrandInput;
};

export type MutationadminEditBrandArgs = {
	input: AdminEditBrandNewInput;
};

export type MutationadminEditCarBuyingNeedArgs = {
	input: AdminEditCarBuyingNeedInput;
};

export type MutationadminEditCarPurchaseCostProvinceArgs = {
	input: AdminEditCarPurchaseCostProvinceInput;
};

export type MutationadminEditCarPurchaseCostProvinceSettingOptionArgs = {
	input: AdminEditCarPurchaseCostProvinceInput;
};

export type MutationadminEditColousArgs = {
	input: AdminEditBrandInput;
};

export type MutationadminEditDoorsArgs = {
	input: AdminEditSeatInput;
};

export type MutationadminEditDriverTypeArgs = {
	input: AdminEditDriverType;
};

export type MutationadminEditFuelEconomyArgs = {
	input: AdminEditFuelEconomy;
};

export type MutationadminEditFuelTypeArgs = {
	input: AdminEditBrandInput;
};

export type MutationadminEditGarageArgs = {
	input: AdminEditGarageInput;
};

export type MutationadminEditModelArgs = {
	input: AdminEditModelnput;
};

export type MutationadminEditMultiVersionArgs = {
	input: AdminEditMultiVersionInput;
};

export type MutationadminEditParkingArgs = {
	input: AdminEditParkingInput;
};

export type MutationadminEditPaymentItemsArgs = {
	input: AdminEditPaymentItemInput;
};

export type MutationadminEditPostArgs = {
	input: AdminEditPostInput;
};

export type MutationadminEditQuestionArgs = {
	input: AdminEditQuestionInput;
};

export type MutationadminEditQuestionGroupArgs = {
	input: AdminEditQuestionGroupInput;
};

export type MutationadminEditQuestionSimulationArgs = {
	input: AdminEditQuestionSimulationInput;
};

export type MutationadminEditQuestionSimulationGroupArgs = {
	input: AdminEditQuestionSimulationGroupInput;
};

export type MutationadminEditSeatsArgs = {
	input: AdminEditSeatInput;
};

export type MutationadminEditVersionArgs = {
	input: AdminEditVersionInput;
};

export type MutationadminForgotPasswordArgs = {
	email: Scalars['String'];
};

export type MutationadminLoginArgs = {
	input: AdminLoginInput;
};

export type MutationadminRejectPostActiveArgs = {
	input: AdminUpdateStatusInput;
};

export type MutationadminSendEmailArgs = {
	input: AdminSendNotificationInput;
};

export type MutationadminSendNotificationArgs = {
	input: AdminSendNotificationInput;
};

export type MutationadminUpdateBalanceArgs = {
	input: AdminUpdateBalance;
};

export type MutationadminUpdateStatusBannerArgs = {
	input: AdminUpdateStatusBannerInput;
};

export type MutationadminUpdateStatusGarageArgs = {
	input: AdminUpdateStatusGarageInput;
};

export type MutationadminUpdateStatusOptionsArgs = {
	input: AdminUpdateStatusOptionsInput;
};

export type MutationadminUpdateStatusParkingArgs = {
	input: AdminUpdateStatusGarageInput;
};

export type MutationadminUpdateStatusPaymentArgs = {
	input: AdminUpdateStatusPlanInput;
};

export type MutationadminUpdateStatusPlanArgs = {
	input: AdminUpdateStatusPlanInput;
};

export type MutationadminUpdateStatusPostArgs = {
	input: AdminUpdateStatusInput;
};

export type MutationadminUpdateStatusTopSearchBrandArgs = {
	input: AdminUpdateStatusTopSearchBrandInput;
};

export type MutationadminUpdateUserArgs = {
	input: AdminUpdateUserInput;
};

export type MutationadminUpdateUserAvatarArgs = {
	input: AdminUpdateUserAvatarInput;
};

export type MutationadminUpdateUserTransferRequestArgs = {
	input: AdminUpdateTransferRequestInput;
};

export type MutationadminVerifyForgotArgs = {
	input: AdminVerifyForgotInput;
};

export type MutationchangePasswordArgs = {
	input: UserChangePasswordInput;
};

export type MutationcheckEmailExistArgs = {
	input: CheckEmailInput;
};

export type MutationcheckPhoneExistArgs = {
	input: CheckPhoneInput;
};

export type MutationcheckReferralCodeExistArgs = {
	input: CheckReferralCodeInput;
};

export type MutationcheckRoomArgs = {
	input: CheckRoomInput;
};

export type MutationcheckUserIdArgs = {
	input: CheckUserIdInput;
};

export type MutationcreateAdminArgs = {
	input: NewAdminUserInput;
};

export type MutationcreateCarBuyingNeedArgs = {
	input: CreateCarBuyingNeedInput;
};

export type MutationcreateCenterDriverLisenseArgs = {
	input: NewCenterDriverLisenseInput;
};

export type MutationcreateCustomerCarBuyingNeedArgs = {
	input: CreateCarBuyingNeedInput;
};

export type MutationcreateGarageArgs = {
	input: NewGarageInput;
};

export type MutationcreateLogsCommonArgs = {
	input: UserCreateLogsCommonInput;
};

export type MutationcreateMediaWithPathArgs = {
	input: CreateMediaWithPathInput;
};

export type MutationcreateParkingArgs = {
	input: NewParkingInput;
};

export type MutationcreatePostArgs = {
	input: NewPostInput;
};

export type MutationcreateRatingArgs = {
	input: CreateRatingInput;
};

export type MutationcreateRatingCenterDriverLisenseArgs = {
	input: CreateRatingCenterDriverLisenseInput;
};

export type MutationcreateRatingGarageArgs = {
	input: CreateRatingGarageInput;
};

export type MutationcreateReviewArgs = {
	input: CreateReviewInput;
};

export type MutationcreateRoomArgs = {
	input: CreateRoomInput;
};

export type MutationdeleteCarBuyingNeedArgs = {
	id: Scalars['String'];
};

export type MutationdeleteCenterDriverLisenseArgs = {
	input: DetailInput;
};

export type MutationdeleteCustomerCarBuyingNeedArgs = {
	id: Scalars['String'];
};

export type MutationdeleteGarageArgs = {
	input: DetailInput;
};

export type MutationdeleteParkingArgs = {
	input: DetailInput;
};

export type MutationeditCarBuyingNeedArgs = {
	input: EditCarBuyingNeedInput;
};

export type MutationeditCenterDriverLisenseArgs = {
	input: EditCenterDriverLisenseInput;
};

export type MutationeditCustomerCarBuyingNeedArgs = {
	input: EditCarBuyingNeedInput;
};

export type MutationeditGarageArgs = {
	input: EditGarageInput;
};

export type MutationeditParkingArgs = {
	input: EditParkingInput;
};

export type MutationeditPostArgs = {
	input: EditPostInput;
};

export type MutationeditReviewArgs = {
	input: EditReviewInput;
};

export type MutationforgotPasswordArgs = {
	input: UserForgotPasswordInput;
};

export type MutationlikePostArgs = {
	input: LikeInput;
};

export type MutationloginArgs = {
	input: AppLoginInput;
};

export type MutationloginSNSArgs = {
	input: SocialLoginInput;
};

export type MutationlogoutArgs = {
	input: LogoutUserInput;
};

export type MutationrefreshTokenArgs = {
	refreshToken: Scalars['String'];
};

export type MutationregisterArgs = {
	input: NewUserInput;
	otpCode: Scalars['String'];
};

export type MutationreportPostArgs = {
	input: PostReportInput;
};

export type MutationreportUserArgs = {
	input: UserReportInput;
};

export type MutationrequestBankTransferArgs = {
	input: UserRequestBankTransferInput;
};

export type MutationseenMessagesArgs = {
	input: SeenMessagesInput;
};

export type MutationsendMessageArgs = {
	input: NewMessagesInput;
};

export type MutationsendOTPArgs = {
	input: SendOtpInput;
};

export type MutationsendOtpActiveEmailArgs = {
	input: UserActiveEmailInput;
};

export type MutationsignOutArgs = {
	input: AppSignOutInput;
};

export type MutationupdateNotificationArgs = {
	input: UserUpdateNotificationInput;
};

export type MutationupdateStatusBuyingDemandArgs = {
	input: EditStatusBuyingDemandInput;
};

export type MutationupdateStatusCarBuyingNeedArgs = {
	input: EditStatusCarBuyingNeedEnumInput;
};

export type MutationupdateStoreNameArgs = {
	input: UserUpdateStoreNameInput;
};

export type MutationupdateUserArgs = {
	input: UpdateUserInput;
};

export type MutationupdateUserAvatarArgs = {
	input: UpdateUserAvatarInput;
};

export type MutationuserBlockPostArgs = {
	input: UserBlockInput;
};

export type MutationuserBlockUserArgs = {
	input: UserBlockInput;
};

export type MutationuserDeleteNotificationArgs = {
	input: DetailInput;
};

export type MutationuserReadNotificationArgs = {
	input: DetailInput;
};

export type MutationuserSubmitAnswerHaySaiArgs = {
	input: SubmitQuestionAnwserHaySaiInput;
};

export type MutationuserSubmitGroupAnswerArgs = {
	input: SubmitQuestionGroupAnwserInput;
};

export type MutationuserSubmitGroupAnswerSimulationArgs = {
	input: SubmitQuestionGroupAnwserSimulationInput;
};

export type MutationuserSubmitGroupAnswerSimulationOneRowArgs = {
	input: SubmitQuestionGroupAnwserSimulationOneRowInput;
};

export type MutationuserUpdateLanguageArgs = {
	input: UserUpdateLanguageInput;
};

export type MutationuserWithdrawAccountArgs = {
	input: UserWithDrawInput;
};

export type MutationverifyActivePhoneArgs = {
	input: UserVerifyActivePhoneInput;
};

export type MutationverifyForgotPasswordEmailArgs = {
	input: UserVerifyForgotPasswordEmailInput;
};

export type MutationverifyForgotPasswordPhoneArgs = {
	input: UserVerifyForgotPasswordPhoneInput;
};

export type MutationverifyOTPArgs = {
	input: VerifyOtpInput;
};

export type NewAdminUserInput = {
	age?: InputMaybe<Scalars['Int']>;
	firstName?: InputMaybe<Scalars['String']>;
	lastName?: InputMaybe<Scalars['String']>;
	password?: InputMaybe<Scalars['String']>;
	username: Scalars['String'];
};

export type NewCenterDriverLisenseInput = {
	address: Scalars['String'];
	city?: InputMaybe<Scalars['String']>;
	description: Scalars['String'];
	district: Scalars['String'];
	email?: InputMaybe<Scalars['String']>;
	medias: Array<Scalars['String']>;
	phone?: InputMaybe<Scalars['String']>;
	province: Scalars['String'];
	title: Scalars['String'];
	ward: Scalars['String'];
	website?: InputMaybe<Scalars['String']>;
};

export type NewGarageInput = {
	address: Scalars['String'];
	city?: InputMaybe<Scalars['String']>;
	description: Scalars['String'];
	district?: InputMaybe<Scalars['String']>;
	email?: InputMaybe<Scalars['String']>;
	latitude: Scalars['Float'];
	longitude: Scalars['Float'];
	medias: Array<Scalars['String']>;
	phone: Scalars['String'];
	province?: InputMaybe<Scalars['String']>;
	services: Array<GarageServicesTypeEnum>;
	title: Scalars['String'];
	ward?: InputMaybe<Scalars['String']>;
	website?: InputMaybe<Scalars['String']>;
};

export type NewMessagesInput = {
	content?: InputMaybe<Scalars['String']>;
	mediaId?: InputMaybe<Scalars['String']>;
	parentId?: InputMaybe<Scalars['String']>;
	postId?: InputMaybe<Scalars['String']>;
	roomId: Scalars['String'];
	type: MessageTypeEnum;
};

export type NewParkingInput = {
	address: Scalars['String'];
	closeOnPublicHolidays: Scalars['Boolean'];
	description: Scalars['String'];
	email?: InputMaybe<Scalars['String']>;
	latitude: Scalars['Float'];
	longitude: Scalars['Float'];
	medias: Array<Scalars['String']>;
	phone: Scalars['String'];
	priceProperties: Array<NewParkingWokingPricePropertiesInput>;
	sameWeekOfOperation: Scalars['Boolean'];
	title: Scalars['String'];
	total: Scalars['Float'];
	website?: InputMaybe<Scalars['String']>;
	workingTimes: Array<NewParkingWokingTimeInput>;
};

export type NewParkingWokingPricePropertiesInput = {
	price: Scalars['Float'];
	type: ParkingPricePropertiesEnum;
};

export type NewParkingWokingTimeInput = {
	day: DayEnum;
	endTime: Scalars['String'];
	startTime: Scalars['String'];
};

export type NewPostDescriptionInput = {
	description?: InputMaybe<Scalars['String']>;
	inspection?: InputMaybe<CarInspectionEnum>;
	offer?: InputMaybe<Array<CarOfferEnum>>;
	remoteAssessment?: InputMaybe<CarRemoteAssessmentEnum>;
	roadworthyCeftificate?: InputMaybe<CarRemoteAssessmentEnum>;
};

export type NewPostEngineInput = {
	driverType?: InputMaybe<Scalars['String']>;
	fuelType?: InputMaybe<Scalars['String']>;
	fuleEconomy?: InputMaybe<Scalars['String']>;
};

export type NewPostInput = {
	descriptionMeta: NewPostDescriptionInput;
	engine?: InputMaybe<NewPostEngineInput>;
	medias?: InputMaybe<Array<Scalars['String']>>;
	mediasHidePlate?: InputMaybe<Array<Scalars['String']>>;
	meta: NewPostMetaInput;
	plan: NewPostPlanInput;
	plateHidden?: InputMaybe<Scalars['Boolean']>;
	publishType: NewPostPublishTypeInput;
	styleMeta?: InputMaybe<NewPostStyleInput>;
	title?: InputMaybe<Scalars['String']>;
	videoUrl?: InputMaybe<Scalars['String']>;
};

export type NewPostMetaInput = {
	brand?: InputMaybe<Scalars['String']>;
	cityId?: InputMaybe<Scalars['String']>;
	condition?: InputMaybe<CarConditionEnum>;
	countryCode?: InputMaybe<Scalars['String']>;
	currency?: InputMaybe<PaymentItemCurrencyEnum>;
	hiddenPrice?: InputMaybe<Scalars['String']>;
	includeTax?: InputMaybe<Scalars['Boolean']>;
	model?: InputMaybe<Scalars['String']>;
	odometer?: InputMaybe<Scalars['Float']>;
	price?: InputMaybe<Scalars['Float']>;
	regExprice?: InputMaybe<Scalars['String']>;
	regPlate?: InputMaybe<Scalars['String']>;
	showHiddenPrice?: InputMaybe<Scalars['Boolean']>;
	transmission?: InputMaybe<CarTransmissionEnum>;
	year?: InputMaybe<Scalars['String']>;
};

export type NewPostPlanInput = {
	planId: Scalars['String'];
};

export type NewPostPublishTypeInput = {
	isPublish: Scalars['Boolean'];
	step?: InputMaybe<Scalars['Float']>;
};

export type NewPostStyleInput = {
	bodyType?: InputMaybe<Scalars['String']>;
	colour?: InputMaybe<Scalars['String']>;
	doors?: InputMaybe<Scalars['String']>;
	seats?: InputMaybe<Scalars['String']>;
};

export type NewUserInput = {
	cityId: Scalars['String'];
	countryCode: Scalars['String'];
	email: Scalars['String'];
	firstName: Scalars['String'];
	inviteCode?: InputMaybe<Scalars['String']>;
	lastName: Scalars['String'];
	password: Scalars['String'];
	phone: Scalars['String'];
	prefixPhone: Scalars['String'];
};

/** Node */
export type Node = {
	id: Scalars['ID'];
};

/** List notification */
export type NotificationConnection = Connection & {
	__typename?: 'NotificationConnection';
	items: Array<NotificationEntity>;
	links: PaginationLinks;
	meta: PaginationMeta;
};

export type NotificationEntity = Node & {
	__typename?: 'NotificationEntity';
	adminNotificationId?: Maybe<Scalars['String']>;
	content: Scalars['String'];
	contentEn?: Maybe<Scalars['String']>;
	createdAt: Scalars['DateTime'];
	id: Scalars['ID'];
	isDeleted: Scalars['Boolean'];
	isRead: Scalars['Boolean'];
	reportId?: Maybe<Scalars['String']>;
	screenType?: Maybe<AdminNotificationScreenTypeEnum>;
	tagetId?: Maybe<Scalars['String']>;
	title: Scalars['String'];
	titleEn?: Maybe<Scalars['String']>;
	type: NotificationTypeEnum;
	userId: Scalars['String'];
};

export enum NotificationTypeEnum {
	ADMIN_SEND = 'ADMIN_SEND',
	APPROVED_GARAGE = 'APPROVED_GARAGE',
	APPROVED_PARKING = 'APPROVED_PARKING',
	APPROVED_TRANSFER_REQUEST = 'APPROVED_TRANSFER_REQUEST',
	EMAIL_NOTIFICATION = 'EMAIL_NOTIFICATION',
	EMAIL_PROMOTION_NOTIFICATION = 'EMAIL_PROMOTION_NOTIFICATION',
	NEW_MESSAGE = 'NEW_MESSAGE',
	NEW_PROMOTION = 'NEW_PROMOTION',
	NEW_REVIEWS = 'NEW_REVIEWS',
	POST_EXPIRED = 'POST_EXPIRED',
	POST_REJECT = 'POST_REJECT',
	POST_SUSPENDED = 'POST_SUSPENDED',
	POST_UPDATE = 'POST_UPDATE',
	PUSH_NOTIFICATION = 'PUSH_NOTIFICATION',
	PUSH_PROMOTION_NOTIFICATION = 'PUSH_PROMOTION_NOTIFICATION',
	REJECTED_GARAGE = 'REJECTED_GARAGE',
	REJECTED_PARKING = 'REJECTED_PARKING',
	REJECTED_TRANSFER_REQUEST = 'REJECTED_TRANSFER_REQUEST',
	REPORTED_POST = 'REPORTED_POST',
	SMS = 'SMS',
}

export type PaginationLinks = {
	__typename?: 'PaginationLinks';
	first?: Maybe<Scalars['String']>;
	last?: Maybe<Scalars['String']>;
	next?: Maybe<Scalars['String']>;
	previous?: Maybe<Scalars['String']>;
};

export type PaginationMeta = {
	__typename?: 'PaginationMeta';
	currentPage: Scalars['Int'];
	itemCount: Scalars['Int'];
	itemsPerPage: Scalars['Int'];
	next?: Maybe<Scalars['String']>;
	previous?: Maybe<Scalars['String']>;
	totalItems: Scalars['Int'];
	totalPages: Scalars['Int'];
};

export type PagingCarBuyingNeedInput = {
	keyword?: InputMaybe<Scalars['String']>;
	skip?: InputMaybe<Scalars['Float']>;
	take?: InputMaybe<Scalars['Float']>;
};

export type PagingCarPurchaseCostProvinceInput = {
	keyword?: InputMaybe<Scalars['String']>;
	skip?: InputMaybe<Scalars['Float']>;
	take?: InputMaybe<Scalars['Float']>;
};

export type PagingCarVersionInput = {
	keyword?: InputMaybe<Scalars['String']>;
	skip?: InputMaybe<Scalars['Float']>;
	take?: InputMaybe<Scalars['Float']>;
};

export type PagingCommonInput = {
	createFrom?: InputMaybe<Scalars['String']>;
	createTo?: InputMaybe<Scalars['String']>;
	keyword?: InputMaybe<Scalars['String']>;
	skip?: InputMaybe<Scalars['Float']>;
	take?: InputMaybe<Scalars['Float']>;
};

export type PagingReviewsInput = {
	category?: InputMaybe<Scalars['String']>;
	ignoreId?: InputMaybe<Array<Scalars['String']>>;
	keyword?: InputMaybe<Scalars['String']>;
	skip?: InputMaybe<Scalars['Float']>;
	sort?: InputMaybe<ReviewSortEnum>;
	take?: InputMaybe<Scalars['Float']>;
};

/** List parking */
export type ParkingConnection = Connection & {
	__typename?: 'ParkingConnection';
	items: Array<ParkingEntity>;
	links: PaginationLinks;
	meta: PaginationMeta;
};

export type ParkingEntity = Node & {
	__typename?: 'ParkingEntity';
	address?: Maybe<Scalars['String']>;
	closeOnPublicHolidays: Scalars['Boolean'];
	createdAt: Scalars['DateTime'];
	description: Scalars['String'];
	distance?: Maybe<Scalars['Float']>;
	district?: Maybe<Scalars['String']>;
	districtDetail?: Maybe<DistrictsEntity>;
	email?: Maybe<Scalars['String']>;
	id: Scalars['ID'];
	isActive: Scalars['Boolean'];
	latitude?: Maybe<Scalars['Float']>;
	location?: Maybe<Scalars['GeoJSONPoint']>;
	longitude?: Maybe<Scalars['Float']>;
	mediaIds: Array<Scalars['String']>;
	medias?: Maybe<Array<ParkingMediasEntity>>;
	phone: Scalars['String'];
	priceProperties?: Maybe<Array<ParkingPricePropertiesEntity>>;
	province?: Maybe<Scalars['String']>;
	provinceDetail?: Maybe<ProviceEntity>;
	reason?: Maybe<Scalars['String']>;
	sameWeekOfOperation: Scalars['Boolean'];
	slug: Scalars['String'];
	status: StatusCommonEnum;
	title: Scalars['String'];
	total: Scalars['Float'];
	updatedAt: Scalars['DateTime'];
	user?: Maybe<UserEntity>;
	userId?: Maybe<Scalars['String']>;
	ward?: Maybe<Scalars['String']>;
	wardDetail?: Maybe<WardsEntity>;
	website?: Maybe<Scalars['String']>;
	workingTimes?: Maybe<Array<ParkingTimeEntity>>;
};

export type ParkingMediasEntity = Node & {
	__typename?: 'ParkingMediasEntity';
	createdAt: Scalars['DateTime'];
	id: Scalars['ID'];
	mediaDetail?: Maybe<Media>;
	mediaId: Scalars['String'];
	parkingId: Scalars['String'];
	updatedAt: Scalars['DateTime'];
};

export type ParkingPricePropertiesEntity = Node & {
	__typename?: 'ParkingPricePropertiesEntity';
	createdAt: Scalars['DateTime'];
	id: Scalars['ID'];
	parkingId: Scalars['String'];
	price: Scalars['Float'];
	type: ParkingPricePropertiesEnum;
	updatedAt: Scalars['DateTime'];
};

export enum ParkingPricePropertiesEnum {
	BELLOW_EIGHT_HOUR = 'BELLOW_EIGHT_HOUR',
	BELLOW_FOUR_HOUR = 'BELLOW_FOUR_HOUR',
	DAYS = 'DAYS',
	MONTHS = 'MONTHS',
	WEEKS = 'WEEKS',
	YEARS = 'YEARS',
}

export type ParkingTimeEntity = Node & {
	__typename?: 'ParkingTimeEntity';
	createdAt: Scalars['DateTime'];
	day: DayEnum;
	endTime: Scalars['String'];
	id: Scalars['ID'];
	parkingId: Scalars['String'];
	startTime: Scalars['String'];
	updatedAt: Scalars['DateTime'];
};

export enum PaymentFormEnum {
	DEBT_BALANCE_DECREASES = 'DEBT_BALANCE_DECREASES',
	DEBT_PAY_EVENLY = 'DEBT_PAY_EVENLY',
}

export enum PaymentItemCurrencyEnum {
	USD = 'USD',
	VND = 'VND',
}

export type PaymentItemEntity = Node & {
	__typename?: 'PaymentItemEntity';
	amount: Scalars['Float'];
	currency: PaymentItemCurrencyEnum;
	id: Scalars['ID'];
	isActive: Scalars['Boolean'];
};

export type PlanEntity = Node & {
	__typename?: 'PlanEntity';
	allowKar: Scalars['Boolean'];
	autoRenew: Scalars['Boolean'];
	createdAt: Scalars['DateTime'];
	duration: Scalars['Float'];
	id: Scalars['ID'];
	isActive: Scalars['Boolean'];
	manualRenew: Scalars['Boolean'];
	name: Scalars['String'];
	priceEn: Scalars['Float'];
	priceKar?: Maybe<Scalars['Float']>;
	priceVi: Scalars['Float'];
	showOnLatestListing: Scalars['Boolean'];
	showOnMainListing: Scalars['Boolean'];
	standardListing: Scalars['Boolean'];
	type: PlanTypeEnum;
	unit: PlanUnitTypeEnum;
	updatedAt: Scalars['DateTime'];
};

export enum PlanTypeEnum {
	KAR_ONE_YEAR = 'KAR_ONE_YEAR',
	KAR_SUPPER = 'KAR_SUPPER',
	SAVING = 'SAVING',
	STANDARD = 'STANDARD',
}

export enum PlanUnitTypeEnum {
	DAY = 'DAY',
	HOUR = 'HOUR',
	YEAR = 'YEAR',
}

/** List post */
export type PostConnection = Connection & {
	__typename?: 'PostConnection';
	items: Array<PostEntity>;
	links: PaginationLinks;
	meta: PaginationMeta;
};

export type PostDetailInput = {
	id?: InputMaybe<Scalars['String']>;
	slug?: InputMaybe<Scalars['String']>;
};

export type PostEntity = Node & {
	__typename?: 'PostEntity';
	bannerGroup?: Maybe<BannerGroupEntity>;
	bannerPositionId?: Maybe<Scalars['String']>;
	bodyType?: Maybe<CarBodyTypeEntity>;
	brand?: Maybe<CarBrandEntity>;
	city?: Maybe<ProviceEntity>;
	cityId?: Maybe<Scalars['String']>;
	colour?: Maybe<CarColourEntity>;
	condition?: Maybe<CarConditionEnum>;
	countryCode?: Maybe<Scalars['String']>;
	createdAt: Scalars['DateTime'];
	currency?: Maybe<PaymentItemCurrencyEnum>;
	description?: Maybe<Scalars['String']>;
	door?: Maybe<Scalars['String']>;
	driverType?: Maybe<CarDriverTypeEntity>;
	fuelEconomy?: Maybe<CarFuelEconomyEntity>;
	fuelType?: Maybe<CarFuelTypeEntity>;
	hiddenPrice?: Maybe<Scalars['String']>;
	hidePlateMedias?: Maybe<Array<PostMediasEntity>>;
	id: Scalars['ID'];
	includeTax: Scalars['Boolean'];
	inspection?: Maybe<CarInspectionEnum>;
	isReport?: Maybe<Scalars['Boolean']>;
	isSaved?: Maybe<Scalars['Boolean']>;
	medias?: Maybe<Array<PostMediasEntity>>;
	model?: Maybe<CarModelEntity>;
	odometer?: Maybe<Scalars['Float']>;
	offer?: Maybe<Array<CarOfferEnum>>;
	planExpried?: Maybe<Scalars['DateTime']>;
	planId?: Maybe<Scalars['String']>;
	plateHidden: Scalars['Boolean'];
	price?: Maybe<Scalars['Float']>;
	regExprice?: Maybe<Scalars['String']>;
	regPlate?: Maybe<Scalars['String']>;
	remoteAssessment?: Maybe<CarRemoteAssessmentEnum>;
	roadworthyCeftificate?: Maybe<CarRemoteAssessmentEnum>;
	seat?: Maybe<Scalars['String']>;
	showHiddenPrice: Scalars['Boolean'];
	slug?: Maybe<Scalars['String']>;
	status: PostStatusEnum;
	statusReasonRejected?: Maybe<PostStatusLogsEntity>;
	stepDraft?: Maybe<Scalars['Float']>;
	title?: Maybe<Scalars['String']>;
	totalView?: Maybe<Scalars['Float']>;
	transmission?: Maybe<CarTransmissionEnum>;
	updatedAt: Scalars['DateTime'];
	user?: Maybe<UserEntity>;
	userId: Scalars['String'];
	videoUrl?: Maybe<Scalars['String']>;
	year?: Maybe<Scalars['Float']>;
};

export type PostMediasEntity = Node & {
	__typename?: 'PostMediasEntity';
	createdAt: Scalars['DateTime'];
	id: Scalars['ID'];
	isFeatured: Scalars['Boolean'];
	isHidePlate: Scalars['Boolean'];
	mediaDetail?: Maybe<Media>;
	mediaId: Scalars['String'];
	postId: Scalars['String'];
	updatedAt: Scalars['DateTime'];
};

export enum PostMetaTypeEnum {
	BODY_TYPE = 'BODY_TYPE',
	BRAND = 'BRAND',
	COLOUR = 'COLOUR',
	CONDITION = 'CONDITION',
	DOOR = 'DOOR',
	DRIVER_TYPE = 'DRIVER_TYPE',
	FUEL_ECONOMY = 'FUEL_ECONOMY',
	FUEL_TYPE = 'FUEL_TYPE',
	INSPECTION = 'INSPECTION',
	MODEL = 'MODEL',
	PAYMENT_ITEM = 'PAYMENT_ITEM',
	PURCHASE_COST_PROVINCE = 'PURCHASE_COST_PROVINCE',
	SEAT = 'SEAT',
	TRANSMISSION = 'TRANSMISSION',
	VERSION = 'VERSION',
	YEAR = 'YEAR',
}

/** List report post */
export type PostReportConnection = Connection & {
	__typename?: 'PostReportConnection';
	items: Array<PostReportEntity>;
	links: PaginationLinks;
	meta: PaginationMeta;
};

export type PostReportEntity = Node & {
	__typename?: 'PostReportEntity';
	content?: Maybe<Scalars['String']>;
	createdAt: Scalars['DateTime'];
	id: Scalars['ID'];
	postId: Scalars['String'];
	reason?: Maybe<Scalars['String']>;
	type: PostReportType;
	updatedAt: Scalars['DateTime'];
	user?: Maybe<UserEntity>;
	userId: Scalars['String'];
};

export type PostReportInput = {
	content?: InputMaybe<Scalars['String']>;
	postId: Scalars['String'];
	reason?: InputMaybe<Scalars['String']>;
	reportType: PostReportType;
};

/** PostReportType */
export enum PostReportType {
	CAR_STOLEN = 'CAR_STOLEN',
	FRAUD = 'FRAUD',
	INCORRECT_INFORMATION = 'INCORRECT_INFORMATION',
	INVALID_SELLER = 'INVALID_SELLER',
	OBJECTIONABLE_CONTENT = 'OBJECTIONABLE_CONTENT',
	OTHERS = 'OTHERS',
}

/** PostSortType */
export enum PostSortType {
	FEATURED = 'FEATURED',
	KM_HIGH_TO_LOW = 'KM_HIGH_TO_LOW',
	KM_LOW_TO_HIGH = 'KM_LOW_TO_HIGH',
	PRICE_HIGH_TO_LOW = 'PRICE_HIGH_TO_LOW',
	PRICE_LOW_TO_HIGH = 'PRICE_LOW_TO_HIGH',
	TOTAL_VIEW = 'TOTAL_VIEW',
	YEAR_HIGH_TO_LOW = 'YEAR_HIGH_TO_LOW',
	YEAR_LOW_TO_HIGH = 'YEAR_LOW_TO_HIGH',
}

export enum PostStatusEnum {
	ACTIVE = 'ACTIVE',
	DETELED = 'DETELED',
	DRAFT = 'DRAFT',
	EDIT_PENDING = 'EDIT_PENDING',
	EXPIRED = 'EXPIRED',
	INSUFFICIENT_FUND = 'INSUFFICIENT_FUND',
	INSUFFICIENT_FUND_RENEW = 'INSUFFICIENT_FUND_RENEW',
	PENDING = 'PENDING',
	REJECTED = 'REJECTED',
	SOLD = 'SOLD',
	SUSPENDED = 'SUSPENDED',
}

export type PostStatusLogsEntity = Node & {
	__typename?: 'PostStatusLogsEntity';
	createdAt: Scalars['DateTime'];
	id: Scalars['ID'];
	note?: Maybe<Scalars['String']>;
	planId?: Maybe<Scalars['String']>;
	postId?: Maybe<Scalars['String']>;
	remainingPlanDay?: Maybe<Scalars['Float']>;
	remainingPlanMinutes?: Maybe<Scalars['Float']>;
	remainingPlanUnit?: Maybe<PlanUnitTypeEnum>;
	status: PostStatusEnum;
	updatedAt: Scalars['DateTime'];
	updatedById?: Maybe<Scalars['String']>;
};

/** List Province */
export type ProviceConnection = Connection & {
	__typename?: 'ProviceConnection';
	items: Array<ProviceEntity>;
	links: PaginationLinks;
	meta: PaginationMeta;
};

export type ProviceEntity = Node & {
	__typename?: 'ProviceEntity';
	code: Scalars['Float'];
	countryCode: Scalars['String'];
	id: Scalars['ID'];
	isActive: Scalars['Boolean'];
	name: Scalars['String'];
	slug?: Maybe<Scalars['String']>;
};

export type Query = {
	__typename?: 'Query';
	/** detail */
	adminCenterDriverLisensePagination?: Maybe<CenterDriverLicenseConnection>;
	/** adminDashboardListingByStatusz */
	adminDashboardActiveListingAndActiveUser?: Maybe<RevenuePerUserType>;
	/** adminDashboardListingByStatusz */
	adminDashboardListingByStatus?: Maybe<Array<CountPostByStatus>>;
	/** adminDashboardListingByStatusz */
	adminDashboardRevenuePerUser?: Maybe<RevenuePerUserType>;
	/** adminDashboardListingByStatusz */
	adminDashboardRevenuePerUserActive?: Maybe<RevenuePerUserType>;
	/** adminDashboardRevenueTotal */
	adminDashboardRevenueTotal?: Maybe<Array<UserTotalNoByTime>>;
	/** adminDashboardTotalRevenue */
	adminDashboardTotalRevenue?: Maybe<Array<UserTotalRevenue>>;
	/** adminDashboardListingByStatusz */
	adminDashboardUserByLocation?: Maybe<Array<UserCountByLocation>>;
	/** adminDashboardListingByStatusz */
	adminDashboardUserGrowthRate?: Maybe<RevenuePerUserType>;
	/** adminDashboardUserStatusActive */
	adminDashboardUserStatusActive?: Maybe<UserStatusCount>;
	/** adminDashboardUserTotal */
	adminDashboardUserTotal?: Maybe<Array<UserTotalNoByTime>>;
	/** detail */
	adminGaragePagination?: Maybe<GarageConnection>;
	/** admin get list detail car buying needs */
	adminGetCarBuyingNeedDetail?: Maybe<CarBuyingNeedEntity>;
	/** admin get list customer detail car buying needs */
	adminGetCustomerCarBuyingNeedDetail?: Maybe<CarBuyingNeedEntity>;
	/** get detail post report by Id */
	adminGetDetailReportPost?: Maybe<PostReportEntity>;
	/** get list car version */
	adminGetListAllVersion?: Maybe<CarVersionConnection>;
	/** Get list car body type */
	adminGetListBodyTypes?: Maybe<Array<CarBodyTypeEntity>>;
	/** Get list car make brand */
	adminGetListBrands?: Maybe<Array<CarBrandEntity>>;
	/** get car purchase cost province detail */
	adminGetListCarPurchaseCostProvinceDetail?: Maybe<CarPurchaseCostProvinceEntity>;
	/** get list car purchase cost province */
	adminGetListCarPurchaseCostProvinces?: Maybe<CarPurchaseCostProvinceConnection>;
	/** Get list car version */
	adminGetListCarPurchaseCostProvinceSettingOption?: Maybe<Array<CarPurchaseCostProvinceEntity>>;
	/** Get list car color */
	adminGetListColous?: Maybe<Array<CarColourEntity>>;
	/** admin get list customer car buying needs by userId */
	adminGetListCustomerCarBuyingNeedByUserId?: Maybe<CarBuyingNeedConnection>;
	/** Get list car door */
	adminGetListDoors?: Maybe<Array<CarDoorEntity>>;
	/** Get list car driver type */
	adminGetListDriverType?: Maybe<Array<CarDriverTypeEntity>>;
	/** Get list car fuel economy */
	adminGetListFuelEconomy?: Maybe<Array<CarFuelEconomyEntity>>;
	/** Get list car fuel type */
	adminGetListFuelType?: Maybe<Array<CarFuelTypeEntity>>;
	/** Get list car make brand */
	adminGetListModels?: Maybe<Array<CarModelEntity>>;
	/** Get list plan listing */
	adminGetListPlan?: Maybe<Array<PlanEntity>>;
	/** get list post report */
	adminGetListReportPost?: Maybe<PostReportConnection>;
	/** Get list Reviews for admin */
	adminGetListReviews?: Maybe<ReviewConnection>;
	/** Get list car seats */
	adminGetListSeats?: Maybe<Array<CarSeatEntity>>;
	/** Get list car version */
	adminGetListVersion?: Maybe<Array<CarVersionEntity>>;
	/** Get list car years */
	adminGetListYears?: Maybe<Array<CarYearEntity>>;
	/** Get max no question simulation */
	adminGetMaxNoQuestionSimulation: Scalars['Float'];
	/** Get review detail */
	adminGetReviewDetail?: Maybe<ReviewsEntity>;
	/** Get list categories active */
	adminGetReviewsCatetories?: Maybe<Array<ReviewCategoriesEntity>>;
	adminGetUserBalance: UserBalanceEntity;
	/** get list car version details */
	adminGetVersionDetail?: Maybe<CarVersionEntity>;
	/** create banner */
	adminListBanner?: Maybe<BannerGroupConnection>;
	/** get list banner position */
	adminListBannerPosition?: Maybe<Array<BannerPositionEntity>>;
	/** admin send notification to user */
	adminListNotification?: Maybe<AdminNotificationConnection>;
	/** admin approve post */
	adminListPost?: Maybe<PostConnection>;
	adminListQuestion?: Maybe<QuestionConnection>;
	adminListQuestionGroup?: Maybe<QuestionGroupConnection>;
	/** get list Question Simulation */
	adminListQuestionSimulation: QuestionSimulationConnection;
	/** get list Question Simulation Group */
	adminListQuestionSimulationGroup: QuestionSimilationGroupConnection;
	/** admin approve post */
	adminListUserTransferRequest?: Maybe<UserRequestTransferConnection>;
	/** admin get list car buying needs */
	adminPaginationCarBuyingNeeds?: Maybe<CarBuyingNeedConnection>;
	/** detail */
	adminParkingPagination?: Maybe<ParkingConnection>;
	/** Get list payment item */
	adminPaymentItems?: Maybe<Array<PaymentItemEntity>>;
	/** Get post detail */
	adminPostDetail?: Maybe<PostEntity>;
	adminQuestionDetail?: Maybe<QuestionEntity>;
	adminQuestionGroupDetail?: Maybe<QuestionGroupEntity>;
	/** get detail Question Simulation */
	adminQuestionSimulationDetail: QuestionSimulationEntity;
	/** get list Question Simulation Group detail */
	adminQuestionSimulationGroupDetail: QuestionSimulationGroupEntity;
	/** calculating installment car Loan */
	calculatingInstallmentCarLoan?: Maybe<CarPurchaseCostEstimateMaster>;
	/** detail */
	centerDriverLisenseDetail?: Maybe<CenterDriverLicenseEntity>;
	/** detail */
	centerDriverLisensePagination?: Maybe<CenterDriverLicenseConnection>;
	/** detail */
	centerDriverLisenseRatingPagination?: Maybe<CenterDriverLicenseRatingConnection>;
	/** Check post has approved */
	checkPostHaveApproved?: Maybe<Scalars['Boolean']>;
	/** Get post detail */
	countPostActive?: Maybe<Scalars['Float']>;
	/** Get list contries */
	countries?: Maybe<CountriesConnection>;
	/** Get list province by country */
	districts?: Maybe<DistrictsConnection>;
	/** detail */
	garageDetail?: Maybe<GarageEntity>;
	/** detail */
	garagePagination?: Maybe<GarageConnection>;
	/** detail */
	garageRatingPagination?: Maybe<GarageRatingConnection>;
	/** Get banner */
	getBanner?: Maybe<BannerEntity>;
	/** get list banner position */
	getBannerDetail?: Maybe<BannerGroupEntity>;
	/** get list detail car buying needs */
	getCarBuyingNeedDetail?: Maybe<CarBuyingNeedEntity>;
	/** Get list car version */
	getCarPurchaseCostProvinceById?: Maybe<Array<CarPurchaseCostProvinceEntity>>;
	/** get category services list */
	getCategoryServices: Array<CategoryServicesEntity>;
	/** Get count by options */
	getCountPostByOptionType?: Maybe<CountPostWithOptionsType>;
	/** get list customer detail car buying needs */
	getCustomerCarBuyingNeedDetail?: Maybe<CarBuyingNeedEntity>;
	/** get detail transfer request */
	getDetailUserTransferRequest?: Maybe<UserRequestBankTransferEntity>;
	/** Get banner */
	getListBank?: Maybe<Array<BanksEntity>>;
	/** Get list car body type */
	getListBodyTypes?: Maybe<Array<CarBodyTypeEntity>>;
	/** Get list car make brand */
	getListBrands?: Maybe<Array<CarBrandEntity>>;
	/** Get list car make brand by condition */
	getListBrandsByCondition?: Maybe<Array<CarBrandEntity>>;
	/** get list car buying needs by userId */
	getListCarBuyingNeedByUserId?: Maybe<CarBuyingNeedConnection>;
	/** get list car buying needs */
	getListCarBuyingNeeds?: Maybe<CarBuyingNeedConnection>;
	/** Get list car version */
	getListCarPurchaseCostProvince?: Maybe<Array<CarPurchaseCostProvinceEntity>>;
	/** Get list car color */
	getListColous?: Maybe<Array<CarColourEntity>>;
	/** get list customer car buying needs by userId */
	getListCustomerCarBuyingNeedByUserId?: Maybe<CarBuyingNeedConnection>;
	/** Get list car door */
	getListDoors?: Maybe<Array<CarDoorEntity>>;
	/** Get list car driver type */
	getListDriverType?: Maybe<Array<CarDriverTypeEntity>>;
	/** Get list car fuel economy */
	getListFuelEconomy?: Maybe<Array<CarFuelEconomyEntity>>;
	/** Get list car fuel type */
	getListFuelType?: Maybe<Array<CarFuelTypeEntity>>;
	/** Get list car make brand */
	getListModels?: Maybe<Array<CarModelEntity>>;
	/** Get list plan listing */
	getListPlan?: Maybe<Array<PlanEntity>>;
	/** Get list post active for home */
	getListPostActive?: Maybe<PostConnection>;
	/** Get list post save by user */
	getListPostSaved?: Maybe<PostConnection>;
	getListQuestion?: Maybe<Array<QuestionEntity>>;
	/** Get list câu hỏi theo chủ đề */
	getListQuestionAnswerHistoryByGroup?: Maybe<Array<UserQuestionAnswerEntity>>;
	/** Thi thử */
	getListQuestionByGroup?: Maybe<Array<QuestionEntity>>;
	/** Get list câu hỏi theo chủ đề */
	getListQuestionByType?: Maybe<Array<QuestionEntity>>;
	/** Get list câu hỏi theo chủ đề */
	getListQuestionByTypeHaySai?: Maybe<QuestionAndAnswerHaySai>;
	/** get danh sách các bộ đề */
	getListQuestionSimulationByGroup?: Maybe<QuestionSimilationGroupConnection>;
	/** xem chi tiết bộ đề */
	getListQuestionSimulationByGroupDetail?: Maybe<Array<QuestionSimulationEntity>>;
	/** Get list tình huống theo chương / câu hay sai */
	getListQuestionSimulationByType?: Maybe<Array<QuestionSimulationEntity>>;
	/** Get list Reviews */
	getListReviews?: Maybe<ReviewConnection>;
	/** Get list car seats */
	getListSeats?: Maybe<Array<CarSeatEntity>>;
	/** Get list car vehicle line */
	getListVersions?: Maybe<Array<CarVersionEntity>>;
	/** Get list car years */
	getListYears?: Maybe<Array<CarYearEntity>>;
	/** Get Car Version Market Price */
	getMarketPriceCarVersions?: Maybe<CarVersionMarketPrice>;
	getNumberKarInvitaion: Scalars['Float'];
	/** get category services list */
	getNumberNotification: Scalars['Float'];
	/** Get post detail */
	getPostDetail?: Maybe<PostEntity>;
	getQuestionGroupByType?: Maybe<Array<QuestionGroupEntity>>;
	/** Get list details rating */
	getRatingBySeller?: Maybe<Array<RatingEntity>>;
	/** Get list details rating */
	getRatingByUserAndSeller?: Maybe<RatingEntity>;
	/** get rating center by user */
	getRatingCenterDriverLisense?: Maybe<CenterDriverLicenseRatingEntity>;
	/** Get details rating */
	getRatingDetail?: Maybe<RatingEntity>;
	/** get rating garage by user */
	getRatingGarage?: Maybe<GarageRatingEntity>;
	/** Get review detail */
	getReviewDetail?: Maybe<ReviewsEntity>;
	/** Get list categories active */
	getReviewsCatetories?: Maybe<Array<ReviewCategoriesEntity>>;
	/** Get seller total */
	getSellerTotal?: Maybe<SellerTotal>;
	getTotalQuestionActive?: Maybe<Scalars['Float']>;
	getTotalQuestionAndAnswer?: Maybe<Array<CountQuestionAndAnswer>>;
	/** Get count tình huống theo chương / câu hay sai */
	getTotalQuestionAndAnswerByType?: Maybe<CountQuestionAndAnswerSimulation>;
	/** Get list post active for home */
	getTotalViewByPost?: Maybe<Scalars['Float']>;
	/** Get post draft */
	getUserPostDraft?: Maybe<PostEntity>;
	/** get list post for user */
	getUserPosts?: Maybe<PostConnection>;
	getUserPromotion: UserPromotionConnection;
	getUsersByRating?: Maybe<UserConnection>;
	/** get list banner position */
	listBannerByPosition?: Maybe<Array<BannerGroupEntity>>;
	/** get list banner position */
	listBannerPosition?: Maybe<Array<BannerPositionEntity>>;
	/** Get current user authentication */
	me: UserEntity;
	/** Get current admin user authentication */
	meAdmin: AdminUser;
	messages: MessageConnection;
	/** detail */
	parkingDetail?: Maybe<ParkingEntity>;
	/** detail */
	parkingPagination?: Maybe<ParkingConnection>;
	/** Get list payment item */
	paymentItems?: Maybe<Array<PaymentItemEntity>>;
	/** Get list province by country */
	provinces?: Maybe<ProviceConnection>;
	/** create post report */
	reportPostDetail?: Maybe<PostReportEntity>;
	rooms: RoomConnection;
	/** Get list province by country */
	seedProvines?: Maybe<ProviceConnection>;
	/** user update status post */
	updatePostStatus?: Maybe<PostEntity>;
	/** Get user info with id */
	user?: Maybe<UserEntity>;
	/** create post */
	userCheckHasGarage?: Maybe<Scalars['Boolean']>;
	/** create post */
	userCheckHasParking?: Maybe<Scalars['Boolean']>;
	/** detail */
	userGarageDetail?: Maybe<GarageEntity>;
	/** get category services list */
	userListNotification: NotificationConnection;
	/** detail */
	userParkingDetail?: Maybe<ParkingEntity>;
	users?: Maybe<UserConnection>;
	userTransactions?: Maybe<UserTransactionConnection>;
	/** Get list province by country */
	wards?: Maybe<WardsConnection>;
};

export type QueryadminCenterDriverLisensePaginationArgs = {
	input: ListCenterDriverLisenseInput;
};

export type QueryadminDashboardRevenueTotalArgs = {
	input: AdminDashboardTotalInput;
};

export type QueryadminDashboardUserTotalArgs = {
	input: AdminDashboardTotalInput;
};

export type QueryadminGaragePaginationArgs = {
	input: ListGarageInput;
};

export type QueryadminGetCarBuyingNeedDetailArgs = {
	id: Scalars['String'];
};

export type QueryadminGetCustomerCarBuyingNeedDetailArgs = {
	id: Scalars['String'];
};

export type QueryadminGetDetailReportPostArgs = {
	id: Scalars['String'];
};

export type QueryadminGetListAllVersionArgs = {
	input: PagingCarVersionInput;
};

export type QueryadminGetListCarPurchaseCostProvinceDetailArgs = {
	id: Scalars['String'];
};

export type QueryadminGetListCarPurchaseCostProvincesArgs = {
	input: PagingCarPurchaseCostProvinceInput;
};

export type QueryadminGetListCustomerCarBuyingNeedByUserIdArgs = {
	input: PagingCarBuyingNeedInput;
};

export type QueryadminGetListReportPostArgs = {
	input: PagingCommonInput;
};

export type QueryadminGetListReviewsArgs = {
	input: PagingReviewsInput;
};

export type QueryadminGetReviewDetailArgs = {
	id: Scalars['String'];
};

export type QueryadminGetUserBalanceArgs = {
	id: Scalars['String'];
};

export type QueryadminGetVersionDetailArgs = {
	id: Scalars['String'];
};

export type QueryadminListBannerArgs = {
	input: PagingCommonInput;
};

export type QueryadminListNotificationArgs = {
	input: AdminNotificationPaginationInput;
};

export type QueryadminListPostArgs = {
	input: AdminListPostInput;
};

export type QueryadminListQuestionArgs = {
	input: AdminListQuestionInput;
};

export type QueryadminListQuestionGroupArgs = {
	input: AdminListQuestionGroupInput;
};

export type QueryadminListQuestionSimulationArgs = {
	input: AdminListQuestionSimulationInput;
};

export type QueryadminListQuestionSimulationGroupArgs = {
	input: AdminListQuestionSimulationGroupInput;
};

export type QueryadminListUserTransferRequestArgs = {
	input: UserTransferRequestInput;
};

export type QueryadminPaginationCarBuyingNeedsArgs = {
	input: PagingCarBuyingNeedInput;
};

export type QueryadminParkingPaginationArgs = {
	input: ListParkingInput;
};

export type QueryadminPostDetailArgs = {
	input: PostDetailInput;
};

export type QueryadminQuestionDetailArgs = {
	input: DetailInput;
};

export type QueryadminQuestionGroupDetailArgs = {
	input: DetailInput;
};

export type QueryadminQuestionSimulationDetailArgs = {
	input: DetailInput;
};

export type QueryadminQuestionSimulationGroupDetailArgs = {
	input: DetailInput;
};

export type QuerycalculatingInstallmentCarLoanArgs = {
	input: CalculatingInstallmentCarLoanInput;
};

export type QuerycenterDriverLisenseDetailArgs = {
	input: DetailInput;
};

export type QuerycenterDriverLisensePaginationArgs = {
	input: ListCenterDriverLisenseInput;
};

export type QuerycenterDriverLisenseRatingPaginationArgs = {
	input: ListCenterDriverLisenseRatingInput;
};

export type QuerycheckPostHaveApprovedArgs = {
	input: PostDetailInput;
};

export type QuerycountriesArgs = {
	input: PagingCommonInput;
};

export type QuerydistrictsArgs = {
	input: DistrictsPagingInput;
};

export type QuerygarageDetailArgs = {
	input: DetailInput;
};

export type QuerygaragePaginationArgs = {
	input: ListGarageInput;
};

export type QuerygarageRatingPaginationArgs = {
	input: ListGarageRatingInput;
};

export type QuerygetBannerDetailArgs = {
	input: BannerDetailInput;
};

export type QuerygetCarBuyingNeedDetailArgs = {
	id: Scalars['String'];
};

export type QuerygetCarPurchaseCostProvinceByIdArgs = {
	provinceId: Scalars['String'];
};

export type QuerygetCountPostByOptionTypeArgs = {
	input: GetCountPostByTypeInput;
};

export type QuerygetCustomerCarBuyingNeedDetailArgs = {
	id: Scalars['String'];
};

export type QuerygetDetailUserTransferRequestArgs = {
	id: Scalars['String'];
};

export type QuerygetListBrandsByConditionArgs = {
	input: CarBrandListInput;
};

export type QuerygetListCarBuyingNeedByUserIdArgs = {
	input: PagingCarBuyingNeedInput;
};

export type QuerygetListCarBuyingNeedsArgs = {
	input: PagingCarBuyingNeedInput;
};

export type QuerygetListCustomerCarBuyingNeedByUserIdArgs = {
	input: PagingCarBuyingNeedInput;
};

export type QuerygetListModelsArgs = {
	input: CarModelListInput;
};

export type QuerygetListPostActiveArgs = {
	input: ListPostInput;
};

export type QuerygetListPostSavedArgs = {
	input: ListPostSavedInput;
};

export type QuerygetListQuestionAnswerHistoryByGroupArgs = {
	input: UserListQuestionGroupByTypeInput;
};

export type QuerygetListQuestionByGroupArgs = {
	input: DetailInput;
};

export type QuerygetListQuestionByTypeArgs = {
	input: QuestionGroupByTypeInput;
};

export type QuerygetListQuestionSimulationByGroupArgs = {
	input: ListQuestionSimulationGroupInput;
};

export type QuerygetListQuestionSimulationByGroupDetailArgs = {
	input: DetailInput;
};

export type QuerygetListQuestionSimulationByTypeArgs = {
	input: QuestionSimulationGroupByTypeInput;
};

export type QuerygetListReviewsArgs = {
	input: PagingReviewsInput;
};

export type QuerygetListVersionsArgs = {
	input: CarVersionListInput;
};

export type QuerygetMarketPriceCarVersionsArgs = {
	input: MarketPriceCarVersionInput;
};

export type QuerygetPostDetailArgs = {
	input: PostDetailInput;
};

export type QuerygetQuestionGroupByTypeArgs = {
	input: QuestionGroupByTypeInput;
};

export type QuerygetRatingBySellerArgs = {
	input: DetailCommonInput;
};

export type QuerygetRatingByUserAndSellerArgs = {
	input: DetailCommonInput;
};

export type QuerygetRatingCenterDriverLisenseArgs = {
	input: DetailInput;
};

export type QuerygetRatingDetailArgs = {
	input: DetailRating;
};

export type QuerygetRatingGarageArgs = {
	input: DetailInput;
};

export type QuerygetReviewDetailArgs = {
	slug: Scalars['String'];
};

export type QuerygetSellerTotalArgs = {
	input: DetailCommonInput;
};

export type QuerygetTotalQuestionAndAnswerByTypeArgs = {
	input: QuestionSimulationGroupByTypeInput;
};

export type QuerygetTotalViewByPostArgs = {
	input: DetailInput;
};

export type QuerygetUserPostsArgs = {
	input: UserListPostInput;
};

export type QuerygetUserPromotionArgs = {
	input: PagingCommonInput;
};

export type QuerygetUsersByRatingArgs = {
	input: UsersRatingInput;
};

export type QuerylistBannerByPositionArgs = {
	input: BannerPositionInput;
};

export type QuerymessagesArgs = {
	input: GetMessagesInput;
};

export type QueryparkingDetailArgs = {
	input: DetailInput;
};

export type QueryparkingPaginationArgs = {
	input: ListParkingInput;
};

export type QueryprovincesArgs = {
	countryCode: Scalars['String'];
	input: PagingCommonInput;
};

export type QueryreportPostDetailArgs = {
	input: DetailInput;
};

export type QueryroomsArgs = {
	input: GetRoomInput;
};

export type QueryupdatePostStatusArgs = {
	input: UserUpdateStatusInput;
};

export type QueryuserArgs = {
	input: UserInput;
};

export type QueryuserListNotificationArgs = {
	input: ListNotificationInput;
};

export type QueryusersArgs = {
	input: UsersInput;
};

export type QueryuserTransactionsArgs = {
	input: UserTransactionInput;
};

export type QuerywardsArgs = {
	input: WardsPagingInput;
};

/** count post by status */
export type QuestionAndAnswerHaySai = {
	__typename?: 'QuestionAndAnswerHaySai';
	answer: Array<UserQuestionAnswerEntity>;
	question: Array<QuestionEntity>;
};

export type QuestionAnswerEntity = Node & {
	__typename?: 'QuestionAnswerEntity';
	content: Scalars['String'];
	correctAnswer: Scalars['Boolean'];
	id: Scalars['ID'];
	no: Scalars['Float'];
	parentNo: Scalars['String'];
	questionId?: Maybe<Scalars['String']>;
};

export type QuestionAnswerSimulationEntity = Node & {
	__typename?: 'QuestionAnswerSimulationEntity';
	id: Scalars['ID'];
	minuteFrom: Scalars['Float'];
	minuteTo: Scalars['Float'];
	no: Scalars['Float'];
	parentNo: Scalars['Float'];
	point: Scalars['Float'];
	questionId?: Maybe<Scalars['String']>;
	secondFrom: Scalars['Float'];
	secondTo: Scalars['Float'];
};

export enum QuestionAnswerTypeEnum {
	SELECT_MULTIPLE = 'SELECT_MULTIPLE',
	SELECT_ONE = 'SELECT_ONE',
}

/** List Question */
export type QuestionConnection = Connection & {
	__typename?: 'QuestionConnection';
	items: Array<QuestionEntity>;
	links: PaginationLinks;
	meta: PaginationMeta;
};

export type QuestionEntity = Node & {
	__typename?: 'QuestionEntity';
	answers?: Maybe<Array<QuestionAnswerEntity>>;
	answerType: QuestionAnswerTypeEnum;
	content: Scalars['String'];
	explainAnswer?: Maybe<Scalars['String']>;
	id: Scalars['ID'];
	imageExplainAnswer?: Maybe<Scalars['String']>;
	images?: Maybe<Array<Scalars['String']>>;
	isActive: Scalars['Boolean'];
	no: Scalars['Float'];
	type: Array<QuestionTypeEnum>;
};

export type QuestionGroupByTypeInput = {
	type: QuestionGroupTypeEnum;
};

/** List Question */
export type QuestionGroupConnection = Connection & {
	__typename?: 'QuestionGroupConnection';
	items: Array<QuestionGroupEntity>;
	links: PaginationLinks;
	meta: PaginationMeta;
};

export type QuestionGroupEntity = Node & {
	__typename?: 'QuestionGroupEntity';
	createdAt: Scalars['DateTime'];
	id: Scalars['ID'];
	name: Scalars['String'];
	questions: Array<Scalars['String']>;
	type: QuestionGroupTypeEnum;
	updatedAt: Scalars['DateTime'];
};

export enum QuestionGroupTypeEnum {
	BIEN_BAO = 'BIEN_BAO',
	CAU_TAO_VA_SUA_CHUA_XE = 'CAU_TAO_VA_SUA_CHUA_XE',
	DIEM_LIET = 'DIEM_LIET',
	KHAI_NIEM_QUY_TAC = 'KHAI_NIEM_QUY_TAC',
	KY_THUAT_LAI_XE = 'KY_THUAT_LAI_XE',
	NGHIEP_VU_VAN_TAI = 'NGHIEP_VU_VAN_TAI',
	SA_HINH = 'SA_HINH',
	SA_HINH_VA_MEO = 'SA_HINH_VA_MEO',
	THI_THU = 'THI_THU',
	VAN_HOA_DAO_DUC_LAI_XE = 'VAN_HOA_DAO_DUC_LAI_XE',
}

/** List Question Simulation Group */
export type QuestionSimilationGroupConnection = Connection & {
	__typename?: 'QuestionSimilationGroupConnection';
	items: Array<QuestionSimulationGroupEntity>;
	links: PaginationLinks;
	meta: PaginationMeta;
};

/** List question simulations */
export type QuestionSimulationConnection = Connection & {
	__typename?: 'QuestionSimulationConnection';
	items: Array<QuestionSimulationEntity>;
	links: PaginationLinks;
	meta: PaginationMeta;
};

export type QuestionSimulationEntity = Node & {
	__typename?: 'QuestionSimulationEntity';
	answers?: Maybe<Array<QuestionAnswerSimulationEntity>>;
	content: Scalars['String'];
	explainAnswer?: Maybe<Scalars['String']>;
	id: Scalars['ID'];
	imageDetail?: Maybe<Array<Media>>;
	images?: Maybe<Array<Scalars['String']>>;
	mediaDetail?: Maybe<Media>;
	no: Scalars['Float'];
	pointLastOfUser?: Maybe<Scalars['Float']>;
	type: Array<QuestionSimulationTypeEnum>;
	videos?: Maybe<Array<Scalars['String']>>;
};

export type QuestionSimulationGroupByTypeInput = {
	type: QuestionSimulationGroupTypeEnum;
};

export type QuestionSimulationGroupEntity = Node & {
	__typename?: 'QuestionSimulationGroupEntity';
	createdAt: Scalars['DateTime'];
	id: Scalars['ID'];
	name: Scalars['String'];
	pointLastOfUser?: Maybe<Scalars['Float']>;
	questions: Array<Scalars['String']>;
	questionSimulationDetails?: Maybe<Array<QuestionSimulationEntity>>;
	type: QuestionSimulationGroupTypeEnum;
	updatedAt: Scalars['DateTime'];
};

export enum QuestionSimulationGroupTypeEnum {
	CAU_HAY_SAI = 'CAU_HAY_SAI',
	CAU_SAI = 'CAU_SAI',
	CHUONG_I_GIAO_THONG_DO_THI = 'CHUONG_I_GIAO_THONG_DO_THI',
	CHUONG_II_GIAO_THONG_O_KHU_VUC_NGOAI_THANH = 'CHUONG_II_GIAO_THONG_O_KHU_VUC_NGOAI_THANH',
	CHUONG_III_GIAO_THONG_TREN_CAO_TOC = 'CHUONG_III_GIAO_THONG_TREN_CAO_TOC',
	CHUONG_IV_GIAO_THONG_TREN_DUONG_NUI = 'CHUONG_IV_GIAO_THONG_TREN_DUONG_NUI',
	CHUONG_V_GIAO_THONG_TREN_DUONG_QUOC_LO = 'CHUONG_V_GIAO_THONG_TREN_DUONG_QUOC_LO',
	CHUONG_VI_TAI_NAN_GIAO_THONG_THUC_TE = 'CHUONG_VI_TAI_NAN_GIAO_THONG_THUC_TE',
	THI_THU = 'THI_THU',
}

export enum QuestionSimulationTypeEnum {
	CHUONG_I_GIAO_THONG_DO_THI = 'CHUONG_I_GIAO_THONG_DO_THI',
	CHUONG_II_GIAO_THONG_O_KHU_VUC_NGOAI_THANH = 'CHUONG_II_GIAO_THONG_O_KHU_VUC_NGOAI_THANH',
	CHUONG_III_GIAO_THONG_TREN_CAO_TOC = 'CHUONG_III_GIAO_THONG_TREN_CAO_TOC',
	CHUONG_IV_GIAO_THONG_TREN_DUONG_NUI = 'CHUONG_IV_GIAO_THONG_TREN_DUONG_NUI',
	CHUONG_V_GIAO_THONG_TREN_DUONG_QUOC_LO = 'CHUONG_V_GIAO_THONG_TREN_DUONG_QUOC_LO',
	CHUONG_VI_TAI_NAN_GIAO_THONG_THUC_TE = 'CHUONG_VI_TAI_NAN_GIAO_THONG_THUC_TE',
}

export enum QuestionTypeEnum {
	BIEN_BAO = 'BIEN_BAO',
	CAU_TAO_VA_SUA_CHUA_XE = 'CAU_TAO_VA_SUA_CHUA_XE',
	DIEM_LIET = 'DIEM_LIET',
	KHAI_NIEM_QUY_TAC = 'KHAI_NIEM_QUY_TAC',
	KY_THUAT_LAI_XE = 'KY_THUAT_LAI_XE',
	NGHIEP_VU_VAN_TAI = 'NGHIEP_VU_VAN_TAI',
	SA_HINH = 'SA_HINH',
	VAN_HOA_DAO_DUC_LAI_XE = 'VAN_HOA_DAO_DUC_LAI_XE',
}

export type RatingEntity = Node & {
	__typename?: 'RatingEntity';
	content?: Maybe<Scalars['String']>;
	createdAt: Scalars['DateTime'];
	id: Scalars['ID'];
	rating: Scalars['Float'];
	sellerStore: Scalars['String'];
	updatedAt: Scalars['DateTime'];
	user?: Maybe<UserEntity>;
	userId: Scalars['String'];
};

/** List user transfer request */
export type RevenuePerUserType = {
	__typename?: 'RevenuePerUserType';
	change: Scalars['Float'];
	value: Scalars['Float'];
};

export type ReviewCategoriesEntity = Node & {
	__typename?: 'ReviewCategoriesEntity';
	createdAt: Scalars['DateTime'];
	id: Scalars['ID'];
	isActive: Scalars['Boolean'];
	nameEn: Scalars['String'];
	nameVi: Scalars['String'];
	slug: Scalars['String'];
	total?: Maybe<Scalars['Float']>;
	updatedAt: Scalars['DateTime'];
};

/** List review */
export type ReviewConnection = Connection & {
	__typename?: 'ReviewConnection';
	items: Array<ReviewsEntity>;
	links: PaginationLinks;
	meta: PaginationMeta;
};

export type ReviewsEntity = Node & {
	__typename?: 'ReviewsEntity';
	categories?: Maybe<ReviewCategoriesEntity>;
	category: Scalars['String'];
	contentEn?: Maybe<Scalars['String']>;
	contentVi?: Maybe<Scalars['String']>;
	createdAt: Scalars['DateTime'];
	descriptionEn?: Maybe<Scalars['String']>;
	descriptionVi?: Maybe<Scalars['String']>;
	id: Scalars['ID'];
	isActive: Scalars['Boolean'];
	mediaIds: Array<Scalars['String']>;
	medias?: Maybe<Array<Media>>;
	nameEn?: Maybe<Scalars['String']>;
	nameVi?: Maybe<Scalars['String']>;
	slug?: Maybe<Scalars['String']>;
	thumnail: Scalars['String'];
	updatedAt: Scalars['DateTime'];
};

export enum ReviewSortEnum {
	LASTEST = 'LASTEST',
	OLDEST = 'OLDEST',
	TITLE_ASC = 'TITLE_ASC',
	TITLE_DESC = 'TITLE_DESC',
}

export type Room = Node & {
	__typename?: 'Room';
	createBy: Scalars['String'];
	createdAt: Scalars['String'];
	createFor?: Maybe<Scalars['String']>;
	id: Scalars['ID'];
	image?: Maybe<Scalars['String']>;
	isDelete?: Maybe<Scalars['Boolean']>;
	lastUpdated?: Maybe<Scalars['String']>;
	members?: Maybe<Array<RoomMember>>;
	message?: Maybe<Message>;
	roomName?: Maybe<Scalars['String']>;
	roomType?: Maybe<Scalars['String']>;
	unread?: Maybe<Scalars['Float']>;
	updatedAt: Scalars['String'];
};

export type RoomConnection = {
	__typename?: 'RoomConnection';
	items: Array<Room>;
	links: PaginationLinks;
	meta: PaginationMeta;
};

export type RoomMember = Node & {
	__typename?: 'RoomMember';
	createdAt: Scalars['String'];
	id: Scalars['ID'];
	role: Scalars['String'];
	roomId: Scalars['String'];
	updatedAt: Scalars['String'];
	user?: Maybe<UserEntity>;
	userId: Scalars['String'];
};

export enum RoomTypeEnum {
	GROUP = 'GROUP',
	PRIVATE = 'PRIVATE',
	PUBLISH = 'PUBLISH',
}

export type SeenMessagesInput = {
	roomId: Scalars['String'];
};

/** count total */
export type SellerTotal = {
	__typename?: 'SellerTotal';
	product: Scalars['Float'];
	view: Scalars['Float'];
};

export type SendOtpInput = {
	phone: Scalars['String'];
};

export enum SNSTypeEnum {
	APPLE = 'APPLE',
	FACEBOOK = 'FACEBOOK',
	GOOGLE = 'GOOGLE',
}

export type SocialLoginInput = {
	accessToken: Scalars['String'];
	deviceToken: Scalars['String'];
	firstName?: InputMaybe<Scalars['String']>;
	lastName?: InputMaybe<Scalars['String']>;
	type: SNSTypeEnum;
};

export enum SortTypeEnum {
	ASC = 'ASC',
	DESC = 'DESC',
}

export enum StatusBuyingDemandEnum {
	NEW = 'NEW',
	PURCHASED = 'PURCHASED',
}

export enum StatusCarBuyingNeedEnum {
	CHANGED_MIND = 'CHANGED_MIND',
	CONSIDERING = 'CONSIDERING',
	FOLLOWING = 'FOLLOWING',
	HAD_A_CAR = 'HAD_A_CAR',
	NEW = 'NEW',
}

export enum StatusCommonEnum {
	ACTIVE = 'ACTIVE',
	PENDING = 'PENDING',
	REJECT = 'REJECT',
}

export type SubmitQuestionAnwserHaySaiInput = {
	data: Array<SubmitQuestionAnwserHaySaiTypeInput>;
};

export type SubmitQuestionAnwserHaySaiTypeInput = {
	answerNo: Scalars['String'];
	isCorrect: Scalars['Boolean'];
	questionNo: Scalars['Float'];
};

export type SubmitQuestionGroupAnwserInput = {
	data: Array<SubmitQuestionGroupAnwserTypeInput>;
	groupType: QuestionGroupTypeEnum;
};

export type SubmitQuestionGroupAnwserSimulationInput = {
	data?: InputMaybe<Array<SubmitQuestionGroupAnwserSimulationTypeInput>>;
	groupType: QuestionSimulationGroupTypeEnum;
};

export type SubmitQuestionGroupAnwserSimulationOneRowInput = {
	data: SubmitQuestionGroupAnwserSimulationTypeInput;
	groupType: QuestionSimulationGroupTypeEnum;
};

export type SubmitQuestionGroupAnwserSimulationTypeInput = {
	point: Scalars['Float'];
	questionGroupId?: InputMaybe<Scalars['String']>;
	questionNo: Scalars['Float'];
};

export type SubmitQuestionGroupAnwserTypeInput = {
	answerNo: Scalars['String'];
	isCorrect: Scalars['Boolean'];
	questionGroupId?: InputMaybe<Scalars['String']>;
	questionNo: Scalars['String'];
};

export type Subscription = {
	__typename?: 'Subscription';
	newMessage: Message;
	updateRooms: Room;
};

export type SubscriptionnewMessageArgs = {
	roomId: Scalars['String'];
};

export enum TransactionLogStatusEnum {
	FAILED = 'FAILED',
	PENDING = 'PENDING',
	PROCESSING = 'PROCESSING',
	PUCHASED = 'PUCHASED',
	RECEIVED = 'RECEIVED',
	REJECTED = 'REJECTED',
}

export enum TypeCarVersionEnum {
	MULTI = 'MULTI',
	SINGEL = 'SINGEL',
}

export type UpdateUserAvatarInput = {
	mediaId: Scalars['String'];
};

export type UpdateUserInput = {
	cityId: Scalars['String'];
	countryCode: Scalars['String'];
	firstName: Scalars['String'];
	lastName: Scalars['String'];
};

export type UserActiveEmailInput = {
	email: Scalars['String'];
};

export type UserBalanceEntity = Node & {
	__typename?: 'UserBalanceEntity';
	amount: Scalars['Float'];
	id: Scalars['ID'];
	promotion: Scalars['Float'];
	userId: Scalars['String'];
};

export enum UserBalanceTypeEnum {
	AMOUNT = 'AMOUNT',
	KAR = 'KAR',
}

export type UserBlockInput = {
	id: Scalars['String'];
	reason: Scalars['String'];
};

export type UserChangePasswordInput = {
	newPassword: Scalars['String'];
	password?: InputMaybe<Scalars['String']>;
};

export type UserConfirmActiveEmailInput = {
	email: Scalars['String'];
	otpCode: Scalars['String'];
};

/** List user */
export type UserConnection = Connection & {
	__typename?: 'UserConnection';
	items: Array<UserEntity>;
	links: PaginationLinks;
	meta: PaginationMeta;
};

/** List user transfer request */
export type UserCountByLocation = {
	__typename?: 'UserCountByLocation';
	cityid?: Maybe<Scalars['String']>;
	count: Scalars['Float'];
	province?: Maybe<ProviceEntity>;
};

export type UserCreateLogsCommonInput = {
	type: UserLogsCommonServicesTypeEnum;
};

export type UserEntity = Node & {
	__typename?: 'UserEntity';
	avatar?: Maybe<Scalars['String']>;
	avatarMedia?: Maybe<Media>;
	createdAt: Scalars['DateTime'];
	dob?: Maybe<Scalars['String']>;
	email?: Maybe<Scalars['String']>;
	firstName?: Maybe<Scalars['String']>;
	hasPassword?: Maybe<Scalars['Boolean']>;
	id: Scalars['ID'];
	isActive: Scalars['Boolean'];
	isActiveEmail: Scalars['Boolean'];
	isActivePhone: Scalars['Boolean'];
	isWithdraw: Scalars['Boolean'];
	lastLoginAt?: Maybe<Scalars['DateTime']>;
	lastName?: Maybe<Scalars['String']>;
	metadata?: Maybe<UserMetadata>;
	phone?: Maybe<Scalars['String']>;
	prefixPhone?: Maybe<Scalars['String']>;
	referralCode: Scalars['String'];
	storeName?: Maybe<Scalars['String']>;
	updatedAt: Scalars['DateTime'];
	userBalance?: Maybe<UserBalanceEntity>;
	username?: Maybe<Scalars['String']>;
	withdrawReason?: Maybe<Scalars['String']>;
};

export type UserForgotPasswordInput = {
	emailOrPhone: Scalars['String'];
};

export type UserInput = {
	userId: Scalars['String'];
};

export type UserListPostInput = {
	keyword?: InputMaybe<Scalars['String']>;
	skip?: InputMaybe<Scalars['Float']>;
	status: UserPostStatusEnum;
	take?: InputMaybe<Scalars['Float']>;
};

export type UserListQuestionGroupByTypeInput = {
	id: Scalars['String'];
};

export enum UserLogsCommonServicesTypeEnum {
	COLD_PENALTY = 'COLD_PENALTY',
	GARAGES = 'GARAGES',
	PARKING = 'PARKING',
}

export type UserMetadata = Node & {
	__typename?: 'UserMetadata';
	avgRating: Scalars['Float'];
	cityId?: Maybe<Scalars['String']>;
	country?: Maybe<CountriesEntity>;
	countryId?: Maybe<Scalars['String']>;
	enableEmailNotification: Scalars['Boolean'];
	enableNotification: Scalars['Boolean'];
	enablePromotionsEmailNotification: Scalars['Boolean'];
	enablePromotionsNotification: Scalars['Boolean'];
	enableSMS: Scalars['Boolean'];
	id: Scalars['ID'];
	language: LanguageEnum;
	provice?: Maybe<ProviceEntity>;
	totalRating: Scalars['Float'];
	types?: Maybe<Array<UserTypeEnum>>;
	userId: Scalars['String'];
};

export enum UserPostStatusEnum {
	ACTIVE = 'ACTIVE',
	DRAFT = 'DRAFT',
	EXPIRED = 'EXPIRED',
	PENDING = 'PENDING',
	REJECTED = 'REJECTED',
	SOLD = 'SOLD',
}

/** List user promotion */
export type UserPromotionConnection = Connection & {
	__typename?: 'UserPromotionConnection';
	items: Array<UserPromotionEntity>;
	links: PaginationLinks;
	meta: PaginationMeta;
};

export type UserPromotionEntity = Node & {
	__typename?: 'UserPromotionEntity';
	createdAt: Scalars['DateTime'];
	descriptionEn: Scalars['String'];
	descriptionVi: Scalars['String'];
	id: Scalars['ID'];
	image: Scalars['String'];
	titleEn: Scalars['String'];
	titleVi: Scalars['String'];
	type: UserPromotionEnum;
	updatedAt: Scalars['DateTime'];
	userId: Scalars['String'];
	value: Scalars['Float'];
};

export enum UserPromotionEnum {
	KAR = 'KAR',
	MONEY = 'MONEY',
}

export type UserQuestionAnswerEntity = Node & {
	__typename?: 'UserQuestionAnswerEntity';
	answerNo?: Maybe<Scalars['String']>;
	createdAt: Scalars['DateTime'];
	id: Scalars['ID'];
	isCorrect: Scalars['Boolean'];
	questionGroupId?: Maybe<Scalars['String']>;
	questionGroupSessionId?: Maybe<Scalars['String']>;
	questionNo?: Maybe<Scalars['Float']>;
	updatedAt: Scalars['DateTime'];
	userId: Scalars['String'];
};

export type UserQuestionAnswerSimulationEntity = Node & {
	__typename?: 'UserQuestionAnswerSimulationEntity';
	answerNo?: Maybe<Scalars['String']>;
	createdAt: Scalars['DateTime'];
	id: Scalars['ID'];
	point: Scalars['Float'];
	questionGroupId?: Maybe<Scalars['String']>;
	questionGroupSessionId?: Maybe<Scalars['String']>;
	questionNo?: Maybe<Scalars['Float']>;
	updatedAt: Scalars['DateTime'];
	userId: Scalars['String'];
};

export type UserReportEntity = Node & {
	__typename?: 'UserReportEntity';
	content?: Maybe<Scalars['String']>;
	createdAt: Scalars['DateTime'];
	id: Scalars['ID'];
	reason?: Maybe<Scalars['String']>;
	type: UserReportType;
	updatedAt: Scalars['DateTime'];
	userId: Scalars['String'];
	userReportId: Scalars['String'];
};

export type UserReportInput = {
	content?: InputMaybe<Scalars['String']>;
	reason?: InputMaybe<Scalars['String']>;
	reportType: UserReportType;
	userReportId: Scalars['String'];
};

/** UserReportType */
export enum UserReportType {
	FAKE_LISTING = 'FAKE_LISTING',
	FAKE_USER = 'FAKE_USER',
	FRAUD_USER = 'FRAUD_USER',
	OTHERS = 'OTHERS',
}

export type UserRequestBankTransferEntity = Node & {
	__typename?: 'UserRequestBankTransferEntity';
	amount: Scalars['Float'];
	bankName: Scalars['String'];
	createdAt: Scalars['DateTime'];
	id: Scalars['ID'];
	moneyTransferReason?: Maybe<Scalars['String']>;
	status: UserRequestBankTransferStatusEnum;
	updatedAt: Scalars['DateTime'];
	userId: Scalars['String'];
	users?: Maybe<UserEntity>;
};

export type UserRequestBankTransferInput = {
	amount: Scalars['Float'];
	bankCode: Scalars['String'];
};

export enum UserRequestBankTransferStatusEnum {
	CONFIRM = 'CONFIRM',
	NEW = 'NEW',
	REJECT = 'REJECT',
}

/** List user transfer request */
export type UserRequestTransferConnection = Connection & {
	__typename?: 'UserRequestTransferConnection';
	items: Array<UserRequestBankTransferEntity>;
	links: PaginationLinks;
	meta: PaginationMeta;
};

export enum UserRoleEnum {
	ALL = 'ALL',
	BUYER = 'BUYER',
	SELLER = 'SELLER',
}

export type UsersInput = {
	cityId?: InputMaybe<Scalars['String']>;
	createFrom?: InputMaybe<Scalars['String']>;
	createTo?: InputMaybe<Scalars['String']>;
	keyword?: InputMaybe<Scalars['String']>;
	role?: InputMaybe<UserRoleEnum>;
	skip?: InputMaybe<Scalars['Float']>;
	status?: InputMaybe<UserStatusEnum>;
	take?: InputMaybe<Scalars['Float']>;
};

export type UsersRatingInput = {
	rating: Scalars['Float'];
	skip?: InputMaybe<Scalars['Float']>;
	take?: InputMaybe<Scalars['Float']>;
};

/** List user transfer request */
export type UserStatusCount = {
	__typename?: 'UserStatusCount';
	active: Scalars['Float'];
	total: Scalars['Float'];
	totalViewPost: Scalars['Float'];
	unverified: Scalars['Float'];
};

export enum UserStatusEnum {
	ACTIVE = 'ACTIVE',
	DEACTIVE = 'DEACTIVE',
}

/** List user transfer request */
export type UserTotalNoByTime = {
	__typename?: 'UserTotalNoByTime';
	count: Scalars['Float'];
	date: Scalars['String'];
};

/** List user transfer request */
export type UserTotalRevenue = {
	__typename?: 'UserTotalRevenue';
	count: Scalars['Float'];
	type: Scalars['String'];
};

/** List user transaction */
export type UserTransactionConnection = Connection & {
	__typename?: 'UserTransactionConnection';
	items: Array<UserTransactionLogsEntity>;
	links: PaginationLinks;
	meta: PaginationMeta;
};

export type UserTransactionInput = {
	skip?: InputMaybe<Scalars['Float']>;
	take?: InputMaybe<Scalars['Float']>;
};

export type UserTransactionLogsEntity = Node & {
	__typename?: 'UserTransactionLogsEntity';
	amount: Scalars['Float'];
	balanceType: UserBalanceTypeEnum;
	bank?: Maybe<BanksEntity>;
	bankCode?: Maybe<Scalars['String']>;
	createdAt: Scalars['DateTime'];
	id: Scalars['ID'];
	lastAmount: Scalars['Float'];
	meta?: Maybe<Scalars['String']>;
	note?: Maybe<Scalars['String']>;
	status: TransactionLogStatusEnum;
	target?: Maybe<Scalars['String']>;
	type: UserTransactionUpdateEnum;
	updatedAt: Scalars['DateTime'];
	userId: Scalars['String'];
};

export enum UserTransactionUpdateEnum {
	ADMIN_ADD = 'ADMIN_ADD',
	AUTO_RENEW_POST = 'AUTO_RENEW_POST',
	BANK_TRANSFER = 'BANK_TRANSFER',
	CREATE_NEW_POST = 'CREATE_NEW_POST',
	CUSTOMER_ADD = 'CUSTOMER_ADD',
	DEPOSIT = 'DEPOSIT',
	INVITE_CODE = 'INVITE_CODE',
	KAR_GIVE_WAY_NEW_USER = 'KAR_GIVE_WAY_NEW_USER',
	MANUAL_RENEW_POST = 'MANUAL_RENEW_POST',
	PROMOTIONAL_GIFTS = 'PROMOTIONAL_GIFTS',
	RE_ACTIVE_POST = 'RE_ACTIVE_POST',
	REFERRAL_CODE = 'REFERRAL_CODE',
	STRIPE = 'STRIPE',
	UPDATE_POST = 'UPDATE_POST',
	VN_PAY = 'VN_PAY',
}

export type UserTransferRequestInput = {
	createFrom?: InputMaybe<Scalars['String']>;
	createTo?: InputMaybe<Scalars['String']>;
	keyword?: InputMaybe<Scalars['String']>;
	skip?: InputMaybe<Scalars['Float']>;
	status?: InputMaybe<UserRequestBankTransferStatusEnum>;
	take?: InputMaybe<Scalars['Float']>;
	userId?: InputMaybe<Scalars['String']>;
};

export enum UserTypeEnum {
	BUYERS = 'BUYERS',
	CAR_OWNERSHIP = 'CAR_OWNERSHIP',
	GARA_SALON_OWNER = 'GARA_SALON_OWNER',
	LEARN_DRIVER_LICENSE = 'LEARN_DRIVER_LICENSE',
	PAKING_OWNER = 'PAKING_OWNER',
	SELLERS = 'SELLERS',
}

export type UserUpdateLanguageInput = {
	language: LanguageEnum;
};

export type UserUpdateNotificationInput = {
	status: Scalars['Boolean'];
	type: NotificationTypeEnum;
};

export enum UserUpdatePostStatusEnum {
	ACTIVE = 'ACTIVE',
	DELETE = 'DELETE',
	SOLD = 'SOLD',
}

export type UserUpdateStatusInput = {
	planId: Scalars['String'];
	postId: Scalars['String'];
	status: UserUpdatePostStatusEnum;
};

export type UserUpdateStoreNameInput = {
	name: Scalars['String'];
};

export type UserVerifyActivePhoneInput = {
	otpCode: Scalars['String'];
	phone: Scalars['String'];
	prefixPhone: Scalars['String'];
};

export type UserVerifyForgotPasswordEmailInput = {
	email: Scalars['String'];
	newPassword: Scalars['String'];
	otpCode: Scalars['String'];
};

export type UserVerifyForgotPasswordPhoneInput = {
	newPassword: Scalars['String'];
	otpCode: Scalars['String'];
	phone: Scalars['String'];
	prefixPhone: Scalars['String'];
};

export type UserWithDrawInput = {
	reason: Scalars['String'];
};

export type VerifyOtpInput = {
	code: Scalars['String'];
	phone: Scalars['String'];
};

/** List Ward */
export type WardsConnection = Connection & {
	__typename?: 'WardsConnection';
	items: Array<WardsEntity>;
	links: PaginationLinks;
	meta: PaginationMeta;
};

export type WardsEntity = Node & {
	__typename?: 'WardsEntity';
	districtCode: Scalars['Float'];
	id: Scalars['ID'];
	isActive: Scalars['Boolean'];
	name: Scalars['String'];
	prefix: Scalars['String'];
	provinceCode: Scalars['Float'];
};

export type WardsPagingInput = {
	districtCode: Scalars['String'];
	keyword?: InputMaybe<Scalars['String']>;
	skip?: InputMaybe<Scalars['Float']>;
	take?: InputMaybe<Scalars['Float']>;
};
