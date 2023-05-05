using Abp.Theming.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace Abp.Theming;

[DependsOn(
    typeof(ThemingEntityFrameworkCoreTestModule)
    )]
public class ThemingDomainTestModule : AbpModule
{

}
