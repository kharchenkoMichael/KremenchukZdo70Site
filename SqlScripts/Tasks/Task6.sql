SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Content](
	Id [int] IDENTITY(1,1) PRIMARY KEY,
	[EmployeeId] [int] NOT NULL,
	[Value] [nvarchar](Max) NULL,
	FOREIGN KEY (EmployeeId) REFERENCES [Employee](Id),
	);