drop table Corn_Feed_and_Residial_Usage;


create table Corn_Feed_and_Residial_Usage (
	years varchar,
	frequnecy varchar,
	attr varchar,
	commodity varchar,
	geography varchar,
	unit varchar,
	amount numeric);




select * from Corn_Feed_and_Residial_Usage;


drop table corn_seed_industrial_use;
create table corn_seed_industrial_use (
	years varchar,
	frequnecy varchar,
	attr varchar,
	commodity varchar,
	geography varchar,
	unit varchar,
	amount numeric
);


select * from corn_seed_industrial_use;

drop table corn_alchol_usage;
create table corn_alchol_usage (
	programs varchar,
	years varchar,
	periods varchar,
	 geo_level varchar,
	states varchar,
	commodity varchar,
	data_item varchar,
	domains varchar,
	domain_category varchar,
	value_ numeric
	);



select * from corn_alchol_usage; 

drop table corn_prices_received;
create table corn_prices_received(
	programs varchar,
	years varchar,
	periods varchar,
	geo_level varchar,
	states varchar,
	state_ANSI int,
	commodity varchar,
	data_item varchar,
	domains varchar,
	domain_category varchar,
	value_ numeric
	);
--Note: There were some values with unkown variables in the value section.  Those variables were changed to 0.--

	
select * from corn_prices_received;


drop table corn_production;
create table corn_production (
	programs varchar,
	years varchar,
	periods varchar,
	geo_level varchar,
	states varchar,
	state_ANSI int,
	commodity varchar,
	data_item varchar,
	domains varchar,
	domain_category varchar,
	value_ numeric,
	cv_percentage numeric
	);
--Note: There were some values with unkown variables in the value and cv_percentage sections.  Those variables were changed to 0. --

select * from corn_production;



drop table corn_Yield_PerAcre;
create table corn_Yield_PerAcre (
	programs varchar,
	years varchar,
	periods varchar,
	geo_level varchar,
	states varchar,
	state_ANSI int,
	commodity varchar,
	data_item varchar,
	domains varchar,
	domain_category varchar,
	value_ numeric);

select  * from corn_Yield_PerAcre;



drop table Grain_Subsidies;

create table Grain_Subsidies(
	Item varchar,
	millions_subsidies numeric,
	millions_production numeric,
	pct_subsidies numeric
	);
	
	
select * from Grain_Subsidies;

	